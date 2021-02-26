exports.up = function (knex) {
  return knex.schema.createTable('transformers', (table) => {
    table.increments();
    table.string('transformer_name', 128).notNullable().unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('transformers');
};
