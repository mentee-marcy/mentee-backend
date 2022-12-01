/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('friend_requests', table =>{
        table.increments('id').primary()
        table.integer('sender_id').references('id').inTable('users');
        table.integer('reciever_id').references('id').inTable('users');
        table.boolean('is_accepted').defaultTo(false);;
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("friend_requests")
};
