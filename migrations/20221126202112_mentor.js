/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('mentor', table => {
    table.integer("mentor_id").references('id').inTable('users').onDelete('cascade')
    table.string('company_name')
    table.string('bio')
    table.string('location')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("mentor")
};
