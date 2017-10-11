const config = require("./config/database");

module.exports = {
  development: config,
  test: config,
  staging: config,
  production: config
}
