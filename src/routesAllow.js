const express = require('express');
const router  = express.Router();

const User    = require("./controllers/UserController")

router.post("/user", User.create)
//demais rotas liberadas
module.exports = router;