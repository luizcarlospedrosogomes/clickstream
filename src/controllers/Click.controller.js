const Projeto = require('../models/Projeto');


module.exports = {
    
 
    async create(req, res){
        const query = {"heatMaps.url" : req.data.url}
        let updateArr = {
            'click':{
               xdg:data.x,
               y:data.y,
               date: new Date()
            }
        };

        Projeto.findOneAndUpdate(query,  {$addToSet:updateArr}, (error, res) => {
            console.log(error)
            console.log(res)
        })
    }
}