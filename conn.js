const mongoose = require('mongoose');
require("dotenv").config("./.env.");

const dbUser = process.env.REACT_APP_DB_USER;
const dbPass = process.env.REACT_APP_DB_PASS;


async function main() {
    try {
        mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@welberdatatabase.776qxzb.mongodb.net/test?retryWrites=true&w=majority&appName=welberdatatabase`)
        console.log('MongoDB Conectado a projetos!')        
    } catch (error) {
        console.error(`error`, error);
    }
}


module.exports = main;