const mongoose = require('mongoose');
const { Schema } = mongoose;

const heatmapSchema = new Schema({
  
    owner: {
        type: String,
        required: true
      },
      criadoEm: {
        type: Date,
        default: Date.now
      },
      status: Boolean,
      url:{
        type: String,
        required: true,
        //validate: [validatePresenceOf, "email required"],
        index: {unique: true}
      },
      name: {
        type: String,
        required: true

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