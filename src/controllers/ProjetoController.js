const { create } = require("../models/Projeto");

module.exports = {

    async create(req,res){

    },

    async list(req, res){
        return res.status(200).json({msg: 'api ok'})
    }
}