const express = require('express');
const app = express ();
const client = require ('../bdd');


// No se ha probado en la base de datos de la U

app.post('/crear',(req,res)=>{

    let body = req.body;
    let post_query=`INSERT INTO usuario (mail, pass) VALUES ('${body.mail}', '${body.pass}')`;

    client.query(post_query,(err,usuarioDB)=>{

        if (err) {
            console.log(err);
            return res.status(400).json({
                ok: false,
                err
            });
        }else{
            let post_query2=`INSERT INTO cliente_registrado (mail, rut, nombre, apellidop, apellidom, telefono) VALUES ('${body.mail}', '${body.rut}','${body.nombre}','${body.apellidop}','${body.apellidom}','${body.telefono}')`;
            client.query(post_query2, (err2, usuarioDB2)=>{
                if (err) {
                    console.log(err);
                    return res.status(400).json({
                        ok: false,
                        err
                    });
                }
                res.json({
                    ok: true,
                    usuario: usuarioDB2
                });
            });
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        });


    });







});


module.exports = app;