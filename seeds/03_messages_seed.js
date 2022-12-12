/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('messages').del()
  await knex('messages').insert([
    {sender_id: 1, reciever_id: 2, text:'Whats up?'},
    {sender_id: 1, reciever_id:3, text: 'rowValue2'},
    {sender_id: 1, reciever_id:4, text: 'whats poppin'},
    {sender_id: 2, reciever_id:1, text: 'How are you'}
  ]);
};
