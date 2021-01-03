const HeatMap = require('../models/Heatmap');


module.exports = {

    async list(req, res){
        console.log(req.userEmail)
        const query = HeatMap.where({owner: req.userEmail})
        try {
            const projetos = await  HeatMap.find(query)
                                            .select('name criadoEm  _id status url')    
            
            if(projetos && projetos.length > 0)  return res.status(200).json(projetos);
            return res.status(404).json({msg: "Não encontrado"});
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    async create(req, res){        
        const data = req.body;
                
      //  if(!data.name || !data.url) return res.status(400).json({msg: "dados invalidos"})

        data.owner  = req.userEmail;
        data.status = true;
        const novoProjeto = new HeatMap(data)
        console.log(data)
        novoProjeto
            .save()
            .then(projeto =>{
                return res.status(200).json(projeto)
            })
            .catch(error =>{
                console.log(error)
                return res.status(400).json({msg:error.Error})
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