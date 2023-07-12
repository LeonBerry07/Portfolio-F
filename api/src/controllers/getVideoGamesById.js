require('dotenv').config();
const { Videogame, Genre } = require('../db');
const { API_KEY } = process.env;
const axios = require('axios');
const URL = `https://api.rawg.io/api/games`;
const { Op } = require('sequelize');

const getVideoGamesById = async(req, res) => {

    try {

        const { idVideogame } = req.params;

        let game;
         
        if(idVideogame.length > 9){

            const gameFromDB = await Videogame.findOne({where: {id: idVideogame}, include: {model: Genre, through: 'videogame_genre', attributes: ['title']}});

                
                const { id, name, description, platforms, released, image, rating, genres, source } = gameFromDB;
                
                game = {
                    
                    id,
                    name,
                    description,
                    platforms,
                    released,
                    image,
                    rating,
                    genres: genres.map((gen) => {return gen.title}),
                    source
                };
        }
        
        else{

            const response = await axios.get(`${URL}/${idVideogame}?key=${API_KEY}`);

            const { id, name, description, platforms, released, background_image, rating, genres } = response.data;

            game = {

                id,
                name,
                description: description.replace(/<[^>]+>/g, ''),
                platforms: platforms.map((plat) => {

                    return plat.platform.name
                }),
                released,
                image: background_image,
                rating,
                genres: genres.map((gen) => {

                    return gen.name
                })
            };
        }

        res.status(201).json(game);
    }
    
    catch (error) {

        res.status(500).json({error: error.message});
    }
};

module.exports = getVideoGamesById;