import { leaderElector } from './leaderElection'
import { nginxClusterController } from './nginxClusterController'

async function main() {
  let stop = false
  while (!stop) {
    const controller = new AbortController()
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

      await nginxClusterController(controller.signal)
    } catch (e: any) {
      abortErrorHandler(e)
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
