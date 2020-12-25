const Projeto = require('../models/Projeto');


module.exports = {

    async list(req, res){
        console.log(req.userId)
        console.log(req.userEmail)
        const query = Projeto.where({owner: req.userEmail})
        try {
            const projetos = await  Projeto.findOne(query)
                                            .select('name criadoEm  heatMaps._id heatMaps.name heatMaps.status heatMaps.url')    
            return res.status(200).json(projetos)
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    async create(req, res){
        console.log(req)
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
    
    async remove(req, res){
        const data  = req.body;        
        const query = {"_id":data.id};
        try {
            const result = await Projeto.remove(query)    
            res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error)
        }
        
        
    }

}