const express = require('express');
const app = express ();
const client = require ('../bdd');

app.post('/comprar',(req,res)=>{

    let body = req.body;
    let post_query=`INSERT INTO  gestion.pedido (id_pedido, comuna, calle, numero, depto, telefono, mail) VALUES ('${body.id}', '${body.comuna}', '${body.calle}','${body.numero}','${body.depto}','${body.telefono}','${body.mail}')`;

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


app.put('/actualizar',(req,res)=>{
    var id = req.body.idd;
    var stock = req.body.stockk;
    let upd_query=`UPDATE gestion.producto SET stock='${stock}' where id_producto='${id}' `;
    client.query(upd_query,(err,usuarioDB)=>{
        if (err) {
       
            console.log(err);
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            
            ok: true,
            listas: usuarioDB.rows
        });
    })
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
            stock1: usuarioDB2.rows
        });
    });
});

module.exports = app;