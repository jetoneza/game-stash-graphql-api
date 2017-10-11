import Server from '../server'
import Bookshelf from '../bookshelf'

let Container = exports = module.exports = {}

let providers = {}

Container.use = (namespace) => {
  return providers[namespace]
}

Container.initializeProviders = () => {
  providers.Bookshelf = new Bookshelf()
  providers.Server = new Server()
}

Container.bootProviders = () => {
  providers.Bookshelf.start()
  providers.Server.start()
}
