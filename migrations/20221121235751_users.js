/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("users", table => {
        table.increments('id').primary()
        table.string("first_name").notNullable()
        table.string("last_name").notNullable()
        table.string("username").notNullable().unique()
        table.string("email").notNullable()
        table.string("password").notNullable()
        table.specificType('tech_stack', 'text ARRAY')
        table.text("avatar")
        table.boolean("mentor").notNullable()
     })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('mentor')
    .dropSchemaIfExists('messages')
    .dropTableIfExists("users")
};
