const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const requireDir  = require('require-dir');

const app = express();

app.use(bodyParser.json());

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