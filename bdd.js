const {Client } = require('pg')

const client = new Client({
  name: 'gestion',
  user: 'agpena2016',
  password: 'trafalgar5',
  host: 'plop.inf.udec.cl',
  port: 5432
})


client.connect(function(error)  {
  if(error){
      message="no me pude conectar"+error;
      console.error(message);
      client.end();
  }
  console.log("Conectado!");
});

module.exports = client;