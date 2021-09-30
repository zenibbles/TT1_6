const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path');
const connectDB = require('./database/dbconnection')
const controller = require('./controllers/auth.controller')

dotenv.config({path:'config.env'}) 
const PORT = process.env.PORT || 5000
const app = express();

// log requests using morgan
app.use(morgan('tiny'));

// mongoDB connection
connectDB();
 
// parse request using body-parser
app.use(bodyparser.urlencoded({extended: true}));

app.get("/api/auth/x", (req,res) => {
    controller.login;
  })

app.listen(PORT, ()=> {console.log(`Server is running on http://localhost:${PORT}`)})