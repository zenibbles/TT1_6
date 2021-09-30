const mongoose = require("mongoose"),Admin = mongoose.mongo.Admin;;
require('dotenv').config({ path:'config.env' });

const connectDB = async() => {
  try{
      const conn = await mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });

      console.log(`MongoDB connected : ${conn.connection.host}`);
  }catch(err){
      console.log(err);
      process.exit(1);
  }
}

module.exports=connectDB;
