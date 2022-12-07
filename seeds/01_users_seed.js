/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {first_name: 'Jose', last_name:'Mazhuvanchery', username:'josemaz', email:'jose@gmail', password:'jose',tech_stack:['java','c++'], mentor:true},
    {first_name: 'Shad', last_name:'Chowdhury', username:'shadChow', email:'shad@gmail', password:'shad',tech_stack:['c','C#'], mentor:true},
    {first_name: 'Shadman', last_name:'Chowdhury', username:'noelFer', email:'noel@gmail', password:'noel',tech_stack:['react','javascript'], mentor:false},
    {first_name:'Gurupriyan', last_name:'Jayakaran',username:'guru',email:'guru@gmail.com',password:'guru',tech_stack:['typescript','javascript','python'], mentor:true},
    {first_name:'Caston', last_name:'Boyd',username:'cast',email:'cast@gmail.com',password:'1234',tech_stack:['java','sql','c++'], mentor:true},
    {first_name:'Jowel', last_name:'Rosario',username:'jow',email:'jow@gmail.com',password:'1234',tech_stack:['javascript','sql'], mentor:true},
    {first_name:'John', last_name:'Doe',username:'john',email:'john@gmail.com',password:'1234',tech_stack:['java','sql'], mentor:false}

  ]);
};
