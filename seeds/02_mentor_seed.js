/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('mentor').del()
  await knex('mentor').insert([
    {mentor_id: 1, company_name: 'spotify', bio:'hi',location:'hicksville'},
    {mentor_id: 2, company_name: 'google', bio:'hello',location:'levittown'},
    {mentor_id: 3, company_name: 'boomberg', bio:'hola',location:'nyc'}
  ]);
};
