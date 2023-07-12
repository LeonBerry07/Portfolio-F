require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');
const URL = `https://api.rawg.io/api/games?key=${API_KEY}`;

const getVideoGames = async(req, res) => {

    try {

        const response = await axios.get(URL);

        const { results } = response.data;
        
        const games = results.map((game) => {
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

        'description'

        res.status(201).json(games);
    }
    
    catch (error) {

        res.status(500).json({error: error.message});
    }
};

module.exports = getVideoGames;