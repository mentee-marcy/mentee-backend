/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('mentor').del()
  await knex('mentor').insert([
    {mentor_id: 1, company_name: 'spotify', bio:'hi', title:'software engineer I',location:'hicksville'},
    {mentor_id: 2, company_name: 'google', bio:'hello', title:'software enginner II',location:'levittown'},
    {mentor_id: 4, company_name: 'boomberg', bio:'hola', title:'senior software engineer',location:'nyc'},
    {mentor_id: 5, company_name: 'marcy lab', bio:'lead technical instructor at marcy', title:'software instructor',location:'nyc'},
    {mentor_id: 6, company_name: 'marcy lab', bio:'associate technical instructor at marcy', title:'software instructor',location:'nyc'}
  ]);
};
