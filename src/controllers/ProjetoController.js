
const { update } = require('../models/Projeto');
const Projeto = require('../models/Projeto');


module.exports = {

    async list(req, res){
        return res.status(200).json({msg: 'api ok'})
    },

    async create(req, res){
        const data = req.body
        const novoProjeto = new Projeto({
            status: data.status,
            url: data.url,
            name: data.name,
        })

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