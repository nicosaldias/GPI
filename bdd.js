const {Pool,Client} = require('pg');



const client = new Client({
  name: 'gestion',
  user: 'agpena2016',
  password: 'trafalgar5',
  host: 'plop.inf.udec.cl',
  port: 5432
})

client.connect();
module.exports = client;

/*name: 'gestion',
  user: 'agpena2016',
  password: 'trafalgar5',
  host: 'plop.inf.udec.cl',
  port: 5432*/