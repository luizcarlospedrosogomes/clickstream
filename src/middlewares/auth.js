const jwt           = require('jsonwebtoken');
const passport      = require('passport')
const passportJWT   = require('passport-jwt')

module.exports = (req, res, next) =>{
    const authHeader = req.headers.authorization;
    //https://www.youtube.com/watch?v=KKTX1l3sZGk
    if(!authHeader)
        return res.status(401).json({msg: 'Token nao presente'});
    
    const parts            = authHeader.split(' ');
    const [scheme, token ] = parts; 

    if(!parts === 2)
        return res.status(401).json({msg: 'Token incorreto'});
    
    
    if(!/^OPENUX$/i.test(scheme))
        return res.status(401).json({msg: 'Token não começa com OPENUX'});

    jwt.verify(token, process.env.SECRET, (error, decoded) =>{
        if(error) return res.status(401).json({msg: error});
        req.userId = decoded.id
        return next()
    })
}