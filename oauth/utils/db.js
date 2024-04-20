const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/OAuth");


mongoose.connection.once("open",() =>{
    console.log("Connected!")
})


module.exports = mongoose;