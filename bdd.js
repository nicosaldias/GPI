// const mysql = require ('pg');

const {Pool,Client} = require('pg');

const client = new Client({
 
  name: 'Gestion',
  user: 'agpena2016',
  password: 'trafalgar5',
  host: 'plop.inf.udec.cl',
  port: 5432
})


client.connect();

module.exports = client;