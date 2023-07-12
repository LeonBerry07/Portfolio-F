const { Genre } = require('../db');

const postGenre = async(req, res) => {

    try {

        const { id, title } = req.body;

        if(!id || !title) return res.status(404).send('Faltan Datos');

        const genre = await Genre.create({
            id, title
        })

        res.status(201).json(genre);
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }

}

module.exports = postGenre;