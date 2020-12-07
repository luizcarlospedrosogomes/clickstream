const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
    token: String,
    tokens:[{
        token:String,
        expired:Boolean,
        expiredIn:Date
    }]
})

module.exports = mongoose.model('users', userSchema);