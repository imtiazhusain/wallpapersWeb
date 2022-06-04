
const express = require('express')
const router = express.Router()
const home= require('../controller/homeController')
const nature = require('../controller/natureController')
const movies = require('../controller/moviesController')
const game = require('../controller/GamesController')
const animation = require('../controller/animationsController')


router.get('/',home)
router.get('/movies',movies)
router.get('/natures',nature)
router.get('/games',game)
router.get('/animations',animation)

module.exports = router

