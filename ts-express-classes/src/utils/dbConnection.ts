import mongoose from 'mongoose';



function connnectionDB() {
    mongoose.connect("mongodb://localhost:27017/classes");
    mongoose.connection.once("open",() => console.log("connected!"))
}


export default connnectionDB