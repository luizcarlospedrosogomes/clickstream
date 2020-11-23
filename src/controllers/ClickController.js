const Projeto = require('../models/Projeto');


module.exports = {
 
    async create(req, res){
        let data    = req.body
        let query   = {"heatMaps.url" : data.url}
     
        Projeto.findOneAndUpdate(query,  {$set: {"heatMaps.$.clicks": data.clicks}}, (error, projeto) => {
            if(error)  return res.status(400).json(error)
            return res.status(400).json(projeto)
        })
    },

    async screenshot(req, res){
        let data  = req.body
        let query =  {"heatMaps.url" : data.url}
        console.log(query)
        console.log(data.screenshot[0].date)
        Projeto.findOneAndUpdate(query,  {$set: {"heatMaps.$.screenshot": data.screenshot}}, (error, projeto) => {
            console.log(error)
            console.log(projeto)
            if(error)  return res.status(400).json(error)
            return res.status(400).json(projeto)
        })
    }

}