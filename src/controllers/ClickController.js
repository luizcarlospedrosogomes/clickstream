const Projeto = require('../models/Projeto');


module.exports = {
 
    async create(req, res){
        let data    = req.body
        let query   = {"heatMaps.url" : data.url}
        console.log(data.url)
        console.log(data.clicks)
        delete data.url
        Projeto.findOneAndUpdate(query,  {$set: {"heatMaps.$.clicks": data.clicks}}, (error, projeto) => {
            console.log(error)
             
        })

       
    }
}