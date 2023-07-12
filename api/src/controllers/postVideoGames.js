const { Videogame, Genre } = require('../db');
const { Op } = require('sequelize');
const { v4: uuidv4 } = require('uuid');


const postVideoGames = async(req, res) => {

    try {

        const { name, description, platforms, image, released, rating, genres } = req.body;

        if(!name || !description || !platforms || 
            !image || !released || !rating || !genres) return res.status(404).send('Faltan Datos');

        const game = await Videogame.create({
            id: uuidv4(), name, description, platforms, image, released, rating, source: 'DB'
        })

        if (genres) {
            const foundGenre = await Genre.findAll({ where: { title: {[Op.iLike]: `%${genres}%`} } });
            await game.addGenre(foundGenre);
        }

        res.status(201).json(game);
    }
    catch (error) {
        
        res.status(500).json({error: error.message})
    }

}

module.exports = postVideoGames;