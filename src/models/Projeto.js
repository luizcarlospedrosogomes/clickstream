const mongoose = require('mongoose');
const { Schema } = mongoose;

const projetoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    require: true
  },
  criadoEm: {
    type: Date,
    default: Date.now
  },
  heatMaps:[
    {
      status: Boolean,
      url: String,
      name: String,
      clicks:[{
        x: String,
        y: String,
        date: Date
      }]

    }
  ]
  
});

module.exports = mongoose.model('projetos', projetoSchema);