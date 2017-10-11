class Server {
  constructor(port = 3002) {
    this.port = port;
    this.app = null;
  }

  start () {
    const app = require('./app');

    this.app = app;
    this.app.listen(this.port, () => {
      console.log('Server is now listening to port ' + this.port);
    })
  }
}

export default Server
