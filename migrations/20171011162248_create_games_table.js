
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("games", table => {
    table.increments("id").primary().notNullable().unique();
    table.text("title").notNullable();
    table.text("type");
    table.text("platform");
    table.text("genre");
    table.float("price");
    table.text("photoUrl");
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("games");
};
