import { leaderElector } from './leaderElection'
import {
  nginxClusterController,
  getInitialState,
} from './nginxClusterController'

async function main() {
  let state = getInitialState()
  let stop = false
  while (!stop) {
    const controller = new AbortController()
    controller.signal.addEventListener('abort', () => {
      stop = true
    })
    ;['SIGTERM', 'SIGINT'].forEach((signalName) => {
      process.once(signalName, () => {
        console.log(`${signalName} received.`)
        stop = true
        controller.abort()
        setTimeout(() => process.exit(0), 5000)
      })
    })

    const { startElectLeaderLoop, becameReaderPromise, lostLeadershipPromise } =
      leaderElector(controller.signal)

    lostLeadershipPromise
      .then(() => controller.abort())
      .catch(abortErrorHandler)

    startElectLeaderLoop().catch(abortErrorHandler)

    try {
      console.debug('[main] Wanna become to leader')
      await becameReaderPromise
      console.debug('[main] Became leader')

      await nginxClusterController(state, controller)
    } catch (e: any) {
      stop = isAbortError(e)
    }
  }
}
main()

function abortErrorHandler(e: any) {
  if (e.name === 'AbortError') {
    return
  }
  throw e
}

function isAbortError(e: unknown): e is Error {
  return (
    e !== null &&
    typeof e === 'object' &&
    'name' in e &&
    e.name === 'AbortError'
  )
}
