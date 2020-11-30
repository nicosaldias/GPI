const express = require('express');
const app = express();
var cors = require('cors');
const bodyParser = require('body-parser');


 // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(require('./routes/login'));

app.listen(3000,()=>{
    console.log('Conectado al puerto 3000');
})
