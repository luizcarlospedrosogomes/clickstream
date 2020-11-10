const express = require('express');
const router = express.Router();

const Projeto = require("./controllers/ProjetoController")

router.get('/', Projeto.list)
router.post('/projeto', Projeto.create)

module.exports = router;