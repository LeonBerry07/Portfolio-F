require('dotenv').config();
const { Videogame, Genre } = require('../db');
const { API_KEY } = process.env;
const axios = require('axios');
const { Op } = require('sequelize');

const getVideoGamesByName = async(req, res) => {

    try {

        const { name } = req.query;    
        const pageSize = 20;
        const totalPages = 5;
        
        const dbVideogames = await Videogame.findAll({   
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            },
            include: {
                model: Genre,
                through: 'videogame_genre',
                attributes: ['title']
              }
        });

        const dbVGames = dbVideogames.map((game) => {

            return {
             id: game.id, 
             name: game.name, 
             platforms: game.platforms, 
             released: game.released,
             image: game.image,
             rating: game.rating,
             genres: game.genres.map((gen) => {
 
                 return gen.title
             }),
             source: "DB"
         };
         })

        let allGames = [];

        for (let page = 1; page <= totalPages; page++) {
            const response = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}&page=${page}&page_size=${pageSize}`);
            const games = response.data.results;
            allGames = allGames.concat(games);                         
        }

        const apiVideogames = allGames.filter((game) => {
            
            return game.name.toLowerCase().includes(name.toLowerCase());
        });

        const apiVGames = apiVideogames.map((game) => {
           return {
            id: game.id, 
            name: game.name, 
            platforms: game.platforms.map((plat) => {

               return plat.platform.name
            }), 
            released: game.released,
            image: game.background_image,
            rating: game.rating,
            genres: game.genres.map((gen) => {

                return gen.name
            }),
            source: "API"
        };
        })

        const games = [...apiVGames,...dbVGames];

        if (games.length > 0) {
            res.status(201).json(games);
        } else {
            res.status(404).json({ message: 'No se encontraron juegos similares con ese nombre' });
        }
        
    } catch (error) {
        res.status(500).json({error: error.message});
    }

};

module.exports = getVideoGamesByName;