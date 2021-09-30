const connectDB = require('../database/dbconnection')
const db = {};



connectDB.customer = require("./customers");
connectDB.product = require("./products");
connectDB.cateogry = require("./categories");

module.exports = db;