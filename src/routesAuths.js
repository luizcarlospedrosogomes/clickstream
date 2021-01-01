const express = require('express');
const router = express.Router();

const HeatMap = require("./controllers/HeatMapController")
const Click   = require("./controllers/ClickController")
const User    = require("./controllers/UserController")

router.get('/heatmap', HeatMap.list)
router.post('/heatmap', HeatMap.create)
router.put('/heatmap', HeatMap.update)
router.delete('/heatmap', HeatMap.remove)

router.post('/click', Click.create)
router.post('/screenshot', Click.screenshot)
router.get('/screenshot/:id', Click.getScreenshot)
router.get('/clicks/:id', Click.getClicks)

router.get("/user", User.listAll)
router.get("/user/:id", User.listOne)
router.put("/user", User.update)
router.delete("/user", User.remove)
module.exports = router;