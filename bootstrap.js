import Container from './container'

export default {
  run: () => {
    Container.bootProviders()
    const Server = use('Server')
    Server.start()
  }
}
