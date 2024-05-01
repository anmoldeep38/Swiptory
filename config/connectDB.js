const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
dotenv.config();

const connectDB = async () => {
    console.log('DB_URI:', process.env.DB_URI); // Logging DB_URI value
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(result => {
        console.log( `Conneted To Mongodb Database`.bgMagenta.white);
    })
    .catch(error => {
        console.log(error);
    });
};

// Accessing the PORT environment variable
// const port = process.env.PORT || 3000; // Default to 3000 if PORT is not set
// console.log('PORT:', port);

module.exports = connectDB;
