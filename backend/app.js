require("dotenv").config();
require(__dirname+'/database/dbconnection.js').connect();
const express = require("express");

const app = express();
app.use(express.json());




module.exports = app;