const express     = require('express');
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');
const requireDir  = require('require-dir');
const cors        = require('cors')
const app         = express();
const authMiddlware = require('./src/middlewares/auth');

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
//app.use(bodyParser.json());
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

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

app.use('/api', require('./src/routesAllow'));
app.use(authMiddlware)
app.use('/api', require('./src/routesAuths')); 
 
app.listen(9000, () => console.log('Server ativo na porta 9000'));