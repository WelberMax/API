const mongoose = require('mongoose');
const { Schema } = mongoose;

const catalogoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    plot: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    }
});

const Catalogo = mongoose.model('movies', catalogoSchema);

module.exports = { Catalogo };