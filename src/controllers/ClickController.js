const Projeto = require('../models/Projeto');

const  writeImage = (url, base64Data) =>{
    let path = `images/${url}/${Date.now}.png`;
    require("fs").writeFile(path, base64Data, 'base64', function(err) {
        if(err) return "";
        return path;
    });
    
}

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
        try {
            data.path = await writeImage(data.url, data.img);    
        } catch (error) {
            console.log(error)
            data.path=""
        }
        
        delete data.screenshot.img  
        console.log(data)      
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
        
    },
}