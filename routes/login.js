const express = require('express');
const app = express ();
const client = require ('../bdd');
const jwt = require('jsonwebtoken');
const usuario = require('./login');


//Funciona pero hay que arreglar el tema de las PK en la base de datos

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

module.exports = app;