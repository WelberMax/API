const { Catalogo: CatalogoModel } = require("../models/catalogoModel");
const mongoose = require('mongoose');
const { Schema } = mongoose;
const validUrl = require('valid-url');
const notFoundPoster = require('../')

require("dotenv").config("../.env.");
const dbUser = process.env.REACT_APP_DB_USER;
const dbPass = process.env.REACT_APP_DB_PASS;

const sampleMflix = mongoose.createConnection(`mongodb+srv://${dbUser}:${dbPass}@welberdatatabase.776qxzb.mongodb.net/sample_mflix?retryWrites=true&w=majority`)
        
const catalogoSchema = new Schema({
    id: {
        type: Number
        
    },
    title: {
        type: String
        
    },
    type: {
        type: String
        
    },
    year: {
        type: Number
        
    },
    plot: {
        type: String
        
    },
    poster: {
        type: String
        
    }
});

const Movies = sampleMflix.model('movies', catalogoSchema);


const catalogoController = {
   getCatalago: async (req, res) => {
    try {
        const catalogo = await Movies.aggregate([
            { $sample: { size: 12 } }, // Sample 12 random documents
            { $project: { 
                title: 1, 
                type: 1, 
                year: 1, 
                plot: 1, 
                genres: 1, 
                poster: 1, 
                fullplot: 1 
            }}
        ]);
        catalogo.forEach(catalogo => {
            if(!validUrl.isUri(catalogo.poster)) {
                catalogo.poster = 'https://demofree.sirv.com/products/123456/123456.jpg?profile=error-example';
            }
        })
        res.status(200).json(catalogo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar catálogo.' });
    }
}
}
module.exports = catalogoController;