/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {first_name: 'jose', last_name:'maz', username:'josemaz', email:'jose@gmail', password:'jose',tech_stack:['java','c++'], mentor:true},
    {first_name: 'shad', last_name:'chow', username:'shadChow', email:'shad@gmail', password:'shad',tech_stack:['c','C#'], mentor:true},
    {first_name: 'noel', last_name:'fer', username:'noelFer', email:'noel@gmail', password:'noel',tech_stack:['react','javascript'], mentor:false}
  ]);
};
