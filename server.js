const express     = require('express');
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');
const requireDir  = require('require-dir');
const cors        = require('cors')
const app         = express();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
//app.use(bodyParser.json());
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.use(cors())

mongoose
  .connect('mongodb://db:27017/crud-node-mongo-docker', {
    useNewUrlParser: true
  })
  .then(result => {
    console.log('MongoDB Conectado');
  }) 
  .catch(error => {
    console.log(error);
  });

requireDir('./src/models');    

app.use('/api', require('./src/routes'));  
app.listen(9000, () => console.log('Server ativo na porta 9000'));