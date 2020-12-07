const bcrypt = require('bcryptjs');
const jwt    = require('jsonwebtoken');
require("dotenv-safe").config();

const User = require("../models/User");

const setToken = async (id) =>{
    
    const tokenDefinitive = jwt.sign({ id }, process.env.SECRET);
    const token = jwt.sign({ id }, process.env.SECRET, {expiresIn: (3600*24)})
    try {        
        let user   = User.findById(id, function(error, user){
            console.log(error)
            console.log(user)
            user.tokens.push({token: token, expired: false, expiredIn: Date.now() + (3600*24)})
            user.save()
        })
        
    } catch (error) {
        console.log(error)
        return false
    }
    
   
}

module.exports = {
    async create(req, res){
        const data         = req.body;
        const password     = data.password;        
        const salt         = bcrypt.genSaltSync(15);
        const hashPassword = bcrypt.hashSync(password, salt);
        const email        = data.email
        const token        = jwt.sign({ email }, process.env.SECRET);//jwt.sign({ email }, process.env.SECRET, {expiresIn: (3600*24)});

        try {
            const newUser       = new User({email: data.email, password: hashPassword, name: data.name, token: token})
            let user            = await newUser.save();              
            const tokenGenerate = await setToken(user._id);
            if(tokenGenerate){                
                return   res.status(200).json(user);
            }
            if(tokenGenerate === false) res.status(400).json({msg:"Erro ao gerar tokens"})
        } catch (error) {
            console.log(error)
            return res.status(400).json(error)   
        }
        
    },
    
    async update(req, res){},
    async listAll(req, res){},
    async listOne(req, res){},
    async remove(req, res){},
}