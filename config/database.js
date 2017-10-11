module.exports = {
  client: "sqlite3",
  connection: {
    filename: "./db/data.sqlite",
  },
  migrations: {
    tableName: "migrations"
  }
};

