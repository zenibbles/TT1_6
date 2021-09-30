const mongoose = require("mongoose");
require('dotenv').config({ path:'config.env' });

const { MONGO_URI } = process.env;

exports.connect = () => {
  mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`MongoDB Connected.`);
    })
    .catch((error) => {
      console.log("Database connection failed.");
      console.error(error);
      process.exit(1);
    });
};
