const HeatMap = require('../models/Heatmap');


module.exports = {

    async list(req, res){
        console.log(req.userEmail)
        const query = HeatMap.where({owner: req.userEmail})
        try {
            const projetos = await  HeatMap.findOne(query)
                                            .select('name criadoEm  heatMaps._id heatMaps.name heatMaps.status heatMaps.url')    
            
            if(projetos)  return res.status(200).json(projetos);
            return res.status(404).json({msg: "Não encontrado"});
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    async create(req, res){        
        const data = req.body        
        const novoProjeto = new HeatMap(data)

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
        HeatMap.findOneAndUpdate(query, data, query)
    },
    
    async remove(req, res){
        const data  = req.body;        
        const query = {"_id":data.id};
        try {
            const result = await HeatMap.remove(query)    
            res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error)
        }
        
        
    }

}