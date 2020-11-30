const express = require('express');
const router = express.Router();

const Projeto = require("./controllers/ProjetoController")
const Click   = require("./controllers/ClickController")

router.get('/projeto', Projeto.list)
router.post('/projeto', Projeto.create)
router.put('/projeto', Projeto.update)



router.post('/click', Click.create)
router.post('/screenshot', Click.screenshot)
router.get('/screenshot', Click.getScreenshot)
router.get('/clicks/:id', Click.getClicks)
module.exports = router;