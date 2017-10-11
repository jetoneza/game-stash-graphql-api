import Container from './container'

export default {
  run: () => {
    Container.initializeProviders()
    Container.bootProviders()
  }
}
