const Projeto = require('../models/Projeto');


module.exports = {

    async list(req, res){
        
        const {owner, name}  = req.headers;
        console.log(owner, name)
        const query = Projeto.where({owner: owner, name: name})
        try {
            const projetos = await  Projeto.findOne(query)
                                            .select('name criadoEm  heatMaps._id heatMaps.name heatMaps.status heatMaps.url')    
            return res.status(200).json(projetos)
        } catch (error) {
            return res.status(400).json(error)
        }
        
        
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