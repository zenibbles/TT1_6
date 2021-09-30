require("dotenv").config();
const express = require("express");
const connectDB = require('./database/dbconnection')

const app = express();
app.use(express.json());

connectDB();

module.exports = app;