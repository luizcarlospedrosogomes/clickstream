const Projeto = require('../models/Projeto');


module.exports = {

    async list(req, res){
        const projetos = await  Projeto.find({})

        return res.status(200).json(projetos)
    },

    async create(req, res){
        const data = req.body        
        const novoProjeto = new Projeto(data)

        novoProjeto
            .save()
            .then(projeto =>{
                res.status(200).json(projeto)
            })
            .catch(error =>{
                return res.status(200).json(error)
            })
       // return res.status(200).json()
    },

    async update(req, res){
        const query = {'_id': req.body._id}
        const data  = req.body.data
        Projeto.findOneAndUpdate(query, data, query)
    },

}