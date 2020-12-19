const express = require('express');
const router  = express.Router();

const User    = require("./controllers/UserController")

// rotas liberadas
router.post("/user", User.create)
router.post("/user/login", User.login)

module.exports = router;