require('dotenv').config();
// const { Genre } = require('../db');
const { API_KEY } = process.env;
const axios = require('axios');
const URL = `https://api.rawg.io/api/platforms?key=${API_KEY}`;

const getPlatforms = async(req, res) => {
    try {
        
      const response = await axios.get(URL);

      const { results } = response.data;

      let mapPlatforms = [];

      results.map((result) => {

        mapPlatforms.push(result.name)
      });

      let i = 0;

      const platforms = mapPlatforms.map((platform) => {

        return {title: platform};
      })

    //   let dbGenres = await Genre.findAll();
      
    //   if(dbGenres.length > 0){
    //     res.status(201).json(dbGenres);
    //   } else{
    //     await Genre.bulkCreate(genres);
    //     dbGenres = await Genre.findAll();
    //     res.status(201).json(dbGenres);
    //   }
      res.status(201).json(platforms);
        
      }

      catch (error) {

        res.status(500).json({error: error.message});
      }
}

module.exports = getPlatforms;