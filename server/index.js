import app from './app'

class Server {
  constructor(port = 3333) {
    this.app = app;
    this.port = port;
  }

  start () {
    this.app.listen(this.port, () => {
      console.log('Server is now listening to port' + this.port);
    })
  }
}

export default Server
