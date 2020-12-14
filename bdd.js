const {Client } = require('pg')

const client = new Client({
  name: 'gestion',
  user: 'phpmyadmin',
  password: 'Nico1998!',
  host: '192.168.18.18',
  port: 3306
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

/*name: 'gestion',
  user: 'agpena2016',
  password: 'trafalgar5',
  host: 'plop.inf.udec.cl',
  port: 5432*/