const mongoose = require('mongoose');
const { Schema } = mongoose;

const heatmapSchema = new Schema({
  
    owner: {
        type: String,
        require: true
      },
      criadoEm: {
        type: Date,
        default: Date.now
      },
      status: Boolean,
      url:{
        type: String,
        require: true
      },
      name: {
        type: String,
        require: true
      },
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
);

module.exports = mongoose.model('heatmaps', heatmapSchema);