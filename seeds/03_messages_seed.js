/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('messages').del()
  await knex('messages').insert([
    {user_to: 1, user_from: 2, text:'Whats up?'},
    {user_to: 2, user_from:3, text: 'rowValue2'},
    {user_to: 3, user_from:1, text: 'whats poppin'}
  ]);
};
