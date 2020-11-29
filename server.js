const express = require('express');
const {Client } = require('pg')
var cors = require('cors')
const app = express();
const bodyParser = require('body-parser')
const client = new Client({
    name: 'Gestion',
    user: 'agpena2016',
    password: 'trafalgar5',
    host: 'plop.inf.udec.cl',
    schema: 'public',
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
  app.use(cors())
  app.use(bodyParser.json());

  
app.post('/verificar-usuario',(req,res)=>{
    const select_query=`SELECT mail FROM cliente WHERE cliente.mail='${req.body.mail}' AND cliente.pass='${req.body.pass}'`;
    client.query(select_query,[mail,pass],(err,result)=>{
        if(err){
            message: 'Usuario o contraseña incorrectos'
            console.log(err);
        }else{
            console.log(result);
            return res.json({
                usuario: result.rows
            })
        }
    })
})


app.post('/verificar-dueno',(req,res)=>{
    const select_query=`SELECT mail FROM dueno_tienda WHERE dueno_tienda.mail='${req.body.mail}' AND dueno_tienda.pass='${req.body.pass}'`;
    client.query(select_query,[mail,pass],(err,result2)=>{
        if(err){
            message: 'Usuario o contraseña incorrectos'
            console.log(err);
        }else{
            console.log(result2);
            return res.json({
                dueno: result2.rows
            })
        }
    })
})