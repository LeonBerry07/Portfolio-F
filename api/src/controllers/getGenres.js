require('dotenv').config();
const { Genre } = require('../db');
const { API_KEY } = process.env;
const axios = require('axios');
const URL = `https://api.rawg.io/api/genres?key=${API_KEY}`;

const getGenres = async(req, res) => {
    try {
        
      const response = await axios.get(URL);

      const { results } = response.data;

      let mapGenres = [];

      results.map((result) => {

        mapGenres.push(result.name)
      });

      let i = 0;

      const genres = mapGenres.map((genre) => {

        return {id:++i, title:genre};
      })

      let dbGenres = await Genre.findAll();
      
      if(dbGenres.length > 0){
        res.status(201).json(dbGenres);
      } else{
        await Genre.bulkCreate(genres);
        dbGenres = await Genre.findAll();
        res.status(201).json(dbGenres);
      }
        
      }

      catch (error) {

        res.status(500).json({error: error.message});
      }
}

module.exports = getGenres;