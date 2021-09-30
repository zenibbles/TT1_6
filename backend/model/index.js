const mongoose = require('mongoose');

const db = {};

db.mongoose = mongoose;

db.customer = require("./customers");
db.product = require("./products");
db.cateogry = require("./categories");

module.exports = db;