const Projeto = require('../models/Projeto');


module.exports = {
 
    async create(req, res){
        let data    = req.body
        let query   = {"heatMaps.url" : data.url}
     
        Projeto.findOneAndUpdate(query,  {$push: {"heatMaps.$.clicks": data.clicks}}, (error, projeto) => {
            if(error)  return res.status(400).json(error)
            return res.status(400).json(projeto)
        })
    },

    async screenshot(req, res){
        let data  = req.body
        let query =  {"heatMaps.url" : data.url}        
        Projeto.findOneAndUpdate(query,  {$push: {"heatMaps.$.screenshot": data.screenshot}}, (error, projeto) => {
            console.log(error)
            console.log(projeto)
            if(error)  return res.status(400).json(error)
            return res.status(400).json(projeto)
        })
    },

    async getScreenshot(req, res){
        const query = req.query;
        console.log(query)
    },

    async getClicks(req, res){
        const data  = req.params;
        console.log(data)
        const query = {"heatMaps._id":data.id};
        try {
          const heatMaps  = await Projeto.find(query).select("heatMaps.clicks")    
            return res.status(200).json(heatMaps)
        } catch (error) {
            return res.status(400).json(error)
        }
        
    }

}