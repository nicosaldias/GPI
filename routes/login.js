const express = require('express');
const app = express ();
const client = require ('../bdd');
const jwt = require('jsonwebtoken');
const login = require('./login');


//Funciona pero hay que arreglar el tema de las PK en la base de datos

app.post('/loginCliente',(req,res)=>{
    var mail = req.body.mail;
    var pass = req.body.pass;
    const select_query=`SELECT * FROM gestion.cliente as cliente WHERE cliente.mail='${mail}' AND cliente.pass='${pass}'`;
    client.query(select_query,(err,result)=>{
        if(err){
            message: 'Usuario o contraseña incorrectos'
            console.log(err);
        }else{
            return res.json({
                usuario: result.rows
            })
        }
    })
})


app.get('/profile/:id',(req,res)=>{

    let id = req.params.id;
    let post_query=`SELECT * FROM gestion.cliente as cliente WHERE cliente.mail ='${id}' `;
    console.log(id);
    connection.query(post_query,(err,usuarioDB)=>{
        
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            usuario: usuarioDB.rows
        });
    });
});


app.get('/stockproducto/:id',(req,res)=>{

    let id = req.params.id;
    let post_query=`SELECT * FROM gestion.producto as productos WHERE productos.id_producto ='${id}' `;
    
    client.query(post_query,(err,usuarioDB2)=>{
        
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            usuario1: usuarioDB2.rows
        });
    });
});



module.exports = app;