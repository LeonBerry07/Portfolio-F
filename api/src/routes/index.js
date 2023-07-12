const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getVideoGames = require('../controllers/getVideoGames');
const getVideoGamesById = require('../controllers/getVideoGamesById');
const getVideoGamesByName = require('../controllers/getVideoGamesByName');
const postVideoGames = require('../controllers/postVideoGames');
// const postGenre = require('../controllers/postGenre');
const getGenres = require('../controllers/getGenres');
const getPlatforms = require('../controllers/getPlatforms');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/vidgame', getVideoGames);
router.get('/videogames/:idVideogame', getVideoGamesById);
router.get('/gamesbyname', getVideoGamesByName);
router.post('/videogames', postVideoGames);
// router.post('/genres', postGenre);
router.get('/genres', getGenres);
router.get('/platforms', getPlatforms);


module.exports = router;
