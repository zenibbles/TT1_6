require("dotenv").config();
console.log(__dirname+'/database/dbconnection');
require(__dirname+'/database/dbconnection.js').connect();