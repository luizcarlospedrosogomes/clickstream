const express = require('express');
const router = express.Router();

const Projeto = require("./controllers/ProjetoController")
const Click   = require("./controllers/ClickController")
const User    = require("./controllers/UserController")

router.get('/projeto', Projeto.list)
router.post('/projeto', Projeto.create)
router.put('/projeto', Projeto.update)
router.delete('/projeto', Projeto.remove)

router.post('/click', Click.create)
router.post('/screenshot', Click.screenshot)
router.get('/screenshot', Click.getScreenshot)
router.get('/clicks/:id', Click.getClicks)

router.get("/user", User.listAll)
router.get("/user/:id", User.listOne)
router.put("/user", User.update)
router.delete("/user", User.remove)
module.exports = router;