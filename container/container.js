import Server from '../server'

let Container = exports = module.exports = {}

let providers = {}

Container.use = (namespace) => {
  return providers[namespace]
}

Container.initializeProviders = () => {
  providers.Server = new Server()
}

Container.bootProviders = () => {
  providers.Server.start()
}
