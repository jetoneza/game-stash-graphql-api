import Config from '../config/database';

const knex = require('knex')(Config);

class Bookshelf {
  constructor () {
    this.instance = null
  }

  start () {
    this.instance = require('bookshelf')(knex);
  }

  getInstance () {
    return this.instance
  }
}

export default Bookshelf
