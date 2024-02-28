const { Catalogo: CatalogoModel } = require("../../API/models/catalogoModel");
const mongoose = require('mongoose');
const { Schema } = mongoose;

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
           const catalogo = await Movies.find().select('title type year plot genres poster fullplot').limit(10);
            res.status(200).json(catalogo);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao buscar catálogo.' });
        }
    }
}
module.exports = catalogoController;