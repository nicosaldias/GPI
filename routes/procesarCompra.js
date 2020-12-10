const express = require('express');
const app = express ();
const client = require ('../bdd');

app.post('/comprar',(req,res)=>{

    let body = req.body;
    let post_query=`INSERT INTO  gestion.pedido (comuna, calle, numero, depto, telefono) VALUES ('${body.comuna}', '${body.calle}','${body.numero}','${body.depto}','${body.telefono}')`;

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