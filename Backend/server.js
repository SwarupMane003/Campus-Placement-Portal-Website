const express = require("express");
const dotenv = require("dotenv");
const connectToDb = require("./config/db");

dotenv.config();
connectToDb();

const app = express();
//middlewares
app.use(express.json());

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server Listening on Port ${port}`));