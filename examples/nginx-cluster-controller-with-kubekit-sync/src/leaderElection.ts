import { sleep } from '@kubekit/client'
import {
  patchCoordinationV1NamespacedLease,
  listCoordinationV1NamespacedLease,
} from './coordination-v1'
import {
  controllerName,
  controllerNamespace,
  holderIdentity,
  leaderName,
} from './type'

const leaseDurationSeconds = 15
const renewPeriodSeconds = 10
const checkPeriodSeconds = 3

function renewTime() {
  return getISODateWithMicroseconds(
    new Date(new Date().getTime() + 1000 * renewPeriodSeconds)
  )
}

async function renewLease(
  namespace: string,
  name: string,
  holderIdentity: string,
  resourceVersion?: string
) {
  return await patchCoordinationV1NamespacedLease({
    namespace,
    name,
    contentType: 'application/apply-patch+yaml',
    fieldManager: controllerName,
    fieldValidation: 'Strict',
    body: {
      apiVersion: 'coordination.k8s.io/v1',
      kind: 'Lease',
      metadata: {
        resourceVersion,
        name,
        namespace,
        labels: {
          [controllerName]: 'true',
        },
      },
      spec: {
        holderIdentity,
        leaseDurationSeconds,
        renewTime: renewTime(),
      },
    },
  })
}

async function leaderElection(
  namespace: string,
  name: string,
  holderIdentity: string
): Promise<
  | {
      type: 'success'
    }
  | {
      type: 'failed'
      waitMillSeconds: number
    }
> {
  const leaseList = await listCoordinationV1NamespacedLease({
    namespace,
    labelSelector: `${controllerName}=true`,
  })
  try {
    const lease = leaseList.items.find((lease) => lease.metadata.name === name)
    if (lease) {
      const now = new Date()
      const nowMillSeconds = Number(now)
      const currentHolderIdentity = lease.spec?.holderIdentity || holderIdentity
      const renewTimeMillSeconds = Number(
        lease.spec?.renewTime ? new Date(lease.spec.renewTime) : now
      )

      if (currentHolderIdentity === holderIdentity) {
        await renewLease(
          namespace,
          name,
          holderIdentity,
          lease.metadata.resourceVersion
        )
        return {
          type: 'success',
        }
      }

      const leaseDurationTimeMillSeconds =
        renewTimeMillSeconds + (lease.spec?.leaseDurationSeconds || 0) * 1000
      if (leaseDurationTimeMillSeconds <= nowMillSeconds) {
        await renewLease(
          namespace,
          name,
          holderIdentity,
          lease.metadata.resourceVersion
        )
        return {
          type: 'success',
        }
      }
      return {
        type: 'failed',
        // The lease should be checked 1 millisecond after the lease expires.
        // However, we do not wait longer than checkPeriodSeconds because the leased resource itself may have been deleted due to external factors.
        waitMillSeconds: Math.min(
          leaseDurationTimeMillSeconds - nowMillSeconds + 1,
          checkPeriodSeconds * 1000
        ),
      }
    } else {
      try {
        await renewLease(namespace, name, holderIdentity)
        return {
          type: 'success',
        }
      } catch (e) {
        return {
          type: 'failed',
          waitMillSeconds: checkPeriodSeconds,
        }
      }
    }
  } catch (e) {
    console.log(`Failed to acquire lease, attempting to renew: ${e}`)
    return {
      type: 'failed',
      waitMillSeconds: checkPeriodSeconds,
    }
  }
}

export function leaderElector(signal: AbortSignal) {
  let hasBecameLeaderOnce = false
  let becameLeaderHandler: (value: void) => void

  const becameReaderPromise = new Promise<void>((resolver, reject) => {
    becameLeaderHandler = () => {
      resolver()
    }
    signal.addEventListener('abort', () => {
      reject(new DOMException('The operation was aborted', 'AbortError'))
    })
  })

  let lostLeaderHandler: (value: void) => void
  const lostLeadershipPromise = new Promise<void>((resolver, reject) => {
    lostLeaderHandler = resolver
    signal.addEventListener('abort', () => {
      reject(new DOMException('The operation was aborted', 'AbortError'))
    })
  })

  const controller = new AbortController()
  let stop = false
  signal.addEventListener('abort', () => {
    stop = true
  })

  let waitMillSeconds = 0

  listCoordinationV1NamespacedLease(
    {
      namespace: controllerNamespace,
      labelSelector: `${controllerName}=true`,
      watch: true,
    },
    {
      signal: controller.signal,
      watchHandler: ({ object: lease, type }) => {
        if (!hasBecameLeaderOnce) {
          return
        }
        if (type === 'DELETED') {
          lostLeaderHandler()
          controller.abort()
          console.info('Lost leadership')
          return
        }
        if (lease.spec?.holderIdentity !== holderIdentity) {
          lostLeaderHandler()
          controller.abort()
          console.info('Lost leadership')
        }
      },
    }
  ).catch(() => {})

  async function startElectLeaderLoop(): Promise<void> {
    while (true) {
      if (stop) {
        break
      }
      await sleep(waitMillSeconds)
      waitMillSeconds = 0

      const result = await leaderElection(
        controllerNamespace,
        leaderName,
        holderIdentity
      )
      switch (result.type) {
        case 'success':
          if (hasBecameLeaderOnce) {
            console.info('Successfully maintained leadership')
          } else {
            console.info('Successfully elected as leader')
          }
          hasBecameLeaderOnce = true
          becameLeaderHandler()
          waitMillSeconds = renewPeriodSeconds * 1000
          break
        case 'failed':
          console.info('Could not become the leader')
          if (hasBecameLeaderOnce) {
            lostLeaderHandler()
          }
          waitMillSeconds = result.waitMillSeconds
          break
        default:
          const _: unknown = result
          throw Error(`Unexpected result type: ${(result as any).type}`)
      }
    }
  }

  return {
    becameReaderPromise,
    lostLeadershipPromise,
    startElectLeaderLoop,
  }
}

function getISODateWithMicroseconds(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  const milliseconds = String(date.getMilliseconds()).padStart(3, '0')

  const microseconds = String(Math.floor(Math.random() * 1000)).padStart(3, '0')

  const timezoneOffset = -date.getTimezoneOffset()
  const offsetSign = timezoneOffset >= 0 ? '+' : '-'
  const offsetHours = String(
    Math.floor(Math.abs(timezoneOffset) / 60)
  ).padStart(2, '0')
  const offsetMinutes = String(Math.abs(timezoneOffset) % 60).padStart(2, '0')
  const offset = `${offsetSign}${offsetHours}:${offsetMinutes}`

  const isoString = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}${microseconds}${offset}`

  return isoString
}
