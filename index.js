require("dotenv").config("./.env.");
const PORT = process.env.REACT_APP_PORT;
const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors());

//API ROUTES
//Wmanager
const Routes = require("./routes/router");
app.use("/api", Routes);

//DB CONNECTION
const connectDatabase = require("./db/conn")
connectDatabase()



app.listen(PORT, () => {
  console.log(`Servidor online na porta: ${PORT}!`);
});
