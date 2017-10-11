import Server from '../server'

let Container = exports = module.exports = {}

let providers = {}

Container.use = (namespace) => {
  return providers[namespace]
}

Container.bootProviders = () => {
  providers.Server = new Server()
}
