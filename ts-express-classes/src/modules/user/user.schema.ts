import mongoose, { Schema } from "mongoose" 


export const userSchema = new Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String}
})


export const User = mongoose.model("User",userSchema);