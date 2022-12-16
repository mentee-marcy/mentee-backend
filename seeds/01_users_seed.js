/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {first_name: 'Jose', last_name:'Mazhuvanchery', username:'josemaz', email:'jose@gmail', password:'jose',tech_stack:['Java','C++'],avatar:"https://avataaars.io/", mentor:false},
    {first_name: 'Farouk', last_name:'Katakpaou', username:'farouk', email:'farouk@gmail', password:'farouk',tech_stack:['C','C#'],avatar:"https://avataaars.io/", mentor:true},
    {first_name: 'Shadman', last_name:'Chowdhury', username:'shadman', email:'shadman@gmail', password:'shadman',tech_stack:['React','Javascript'],avatar:"https://avataaars.io/", mentor:false},
    {first_name:'Gurupriyan', last_name:'Jayakaran',username:'guru',email:'guru@gmail.com',password:'guru',tech_stack:['Javascript','Python'],avatar:"https://avataaars.io/", mentor:true},
    {first_name:'Caston', last_name:'Boyd',username:'cast',email:'cast@gmail.com',password:'1234',tech_stack:['Java','C++'],avatar:"https://avataaars.io/", mentor:true},
    {first_name:'Jowel', last_name:'Rosario',username:'jow',email:'jow@gmail.com',password:'1234',tech_stack:['Javascript'],avatar:"https://avataaars.io/", mentor:true},
    {first_name:'Ana', last_name:'Reyes',username:'ana',email:'ana@gmail.com',password:'1234',tech_stack:['Java'],avatar:"https://avataaars.io/", mentor:true}

  ]);
};
