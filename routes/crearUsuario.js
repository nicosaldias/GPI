const express = require('express');
const app = express ();
const client = require ('../bdd');

app.post('/crear',(req,res)=>{

    let body = req.body;
    let post_query=`INSERT INTO  gestion.cliente (rut, mail, pass, nombre_cliente, apellido_cliente) VALUES ('${body.rut}', '${body.mail}','${body.pass}','${body.nombre_cliente}','${body.apellido_cliente}')`;

    client.query(post_query,(err,usuarioDB)=>{

        if (err) {
            console.log(err);
            return res.status(400).json({
                ok: false,
                err
            });
        }else{
            res.json({
                ok: true,
                usuario: usuarioDB
            });
        }
    });
});


module.exports = app;