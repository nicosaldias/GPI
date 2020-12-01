const express = require('express');
const app = express ();
const connection = require ('../bdd');


//Funciona bien pero yo le añadiria una id en la base de datos
//En vez de que tenga el mail como PK

app.get('/profile/:id',(req,res)=>{

    let id = req.params.id;
    let post_query=`SELECT * FROM cliente_registrado WHERE mail ='${id}' `;
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


module.exports = app;