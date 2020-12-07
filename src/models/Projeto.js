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
      screenshot:[{
        date: Number,        
        path:String,
        body:String
      }],
      clicks:[{
        x: Number,
        y: Number,
        date: Number,
        event: String
      }]

    }
  ]
  
});

module.exports = mongoose.model('projetos', projetoSchema);