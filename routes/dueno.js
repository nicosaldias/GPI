const express = require('express');
const app = express ();
const client = require ('../bdd');

const bodyParser = require('body-parser');


app.get('/misdatos/:id', (req, res) => {
    var id = req.params.id;
    //console.log(id);
    const select_query=`SELECT * FROM dueno_tienda where mail='${id}';`
    client.query(select_query,(err, result) => {
     if (err){
         //console.log(select_query);
        //console.log(err);
        console.log("aqui muero");
           return res.send(err)
        }else{
           //console.log(select_query);
            console.log(result.rows);
            return res.json({
                
                data: result.rows

            })
     }
    });
});

app.get('/mitienda/:id', (req, res) => {
    var id = req.params.id;
    const select_query=`SELECT * FROM tienda where id_tienda='${id}';`
    client.query(select_query,(err, result) => {
     if (err){
         console.log(err);
           return res.send(err)
        }else{
           
            //console.log(result[0].idtienda);
            return res.json({

                data: result.rows

            })
     }
    });
});

app.get('/miscategorias/:id', (req, res) => {
    var id = req.params.id;
    const select_query=`SELECT * FROM categoria where id_tienda='${id}';`
    client.query(select_query,(err, result) => {
        if (err){
            return res.send(err)
            }else{
            
                //console.log(result[0].idtienda);
                return res.json({

                    data: result.rows

                })
        }
        });
});
      
app.get('/misproductos/:id', (req, res) => {
    var id = req.params.id;
    const select_query=`SELECT * FROM producto where id_tienda='${id}';`
    
 client.query(select_query,(err, result) => {
     if (err){
           return res.send(err)
        }else{
           
            //console.log(result[0].idtienda);
            return res.json({

                data: result.rows

            })
     }
    });
});

app.post('/addProducto/:id', bodyParser.json(), (req, res, next) => {
    var id = req.params.id;
    var categoria= req.body.categoria;
    var url = req.body.imagen;
    const select_query=`SELECT max(id_producto) as maxid FROM producto where id_tienda='${id}' and nombre_categoria='${categoria}';`
    //console.log("legueeeeee")
    //const INSERT_TIPO_QUERY = `INSERT INTO producto (id_tienda, nombre_categoria, id_producto, rut, cargo, correo, pass)  VALUES('${req.body.nombre}','${req.body.apellidoP}','${req.body.apellidoM}','${req.body.rut}','${req.body.cargo}','${req.body.correo}', AES_ENCRYPT ('${req.body.pass}','encriptado'))`;
    client.query(select_query, (err, resultados) => {

    if(err) {
        console.log(err); 
        res.status(500).send('Error al añadir solicitud de registro de usuario.');
        
    } else {
        console.log(resultados.rows[0].maxid);
        if(resultados.rows[0].maxid>0){
            console.log("soy el maxid");
            var id_producto_nuevo = resultados.rows[0].maxid + 1;
            const INSERT_TIPO_QUERY = `INSERT INTO producto (id_tienda, nombre_categoria, id_producto, nombre, stock, valor, imagen)  VALUES('${id}','${req.body.categoria}','${id_producto_nuevo}','${req.body.nombre}','${req.body.stock}','${req.body.valor}', '${url}')`;  

            client.query(INSERT_TIPO_QUERY, (err2, resultados2)=>{
                if(err2){
                    console.log(err2); 
                    res.status(500).send('Error al añadir solicitud de registro de producto.');
                    
                }else{
                    res.json(res.body);
                }
            });
            res.json(res.body)
        }else if(resultados.rows[0].maxid == null){
            console.log("soy el maxid");
            console.log(resultados.rows[0].maxid);
            var id_producto_nuevo = 1;
            const INSERT_TIPO_QUERY = `INSERT INTO producto (id_tienda, nombre_categoria, id_producto, nombre, stock, valor, imagen)  VALUES('${id}','${req.body.categoria}','${id_producto_nuevo}','${req.body.nombre}','${req.body.stock}','${req.body.valor}', '${url}')`;  

            client.query(INSERT_TIPO_QUERY, (err2, resultados2)=>{
                if(err2){
                    res.status(500).send('Error al añadir solicitud de registro de producto.');
                    console.log(err2); 
                }else{
                    res.json(res.body);
                }
            });
        }
        

    }
})
});
 
app.delete('/delProducto',(req, res) => {
    var id_tienda=req.param('id_tienda');
    var nombre_categoria= req.param('nombre_categoria');
    var id_producto=req.param('id_producto')

    const del_query = `DELETE FROM producto WHERE id_tienda='${id_tienda}' and nombre_categoria='${nombre_categoria}' and id_producto='${id_producto}';`
    client.query(del_query, (err, resultados) => {

        if(err) {
            return res.send(err)
        } else {
            res.json(res.body)

        }
    })
});

app.put('/modProducto/:id', bodyParser.json(), (req, res, next) => {
    var id=req.params.id;
    var nombre_categoria=req.body.categoria2;
    var id_producto=req.body.id_producto2;

    var nombre_categoria_anterior=req.body.categoria_anterior;
    console.log(nombre_categoria_anterior);
    console.log(id);
    console.log(nombre_categoria);
    console.log(id_producto);
    const upd_query = `UPDATE producto SET nombre_categoria='${req.body.categoria2}',nombre='${req.body.nombre2}', stock=${req.body.stock2},valor='${req.body.valor2}',imagen='${req.body.imagen2}' WHERE id_tienda ='${id}' and nombre_categoria='${nombre_categoria_anterior}' and id_producto='${id_producto}';`
    client.query(upd_query, (err, resultados) => {

        if(err) {
            
            return res.send(err)
        } else {
            console.log(upd_query);
            res.json(res.body)

        }
    })
})


module.exports = app;