import mongoose, { Schema } from "mongoose" 


export const userSchema = new Schema({
<<<<<<< HEAD
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    }
=======
    name:{type:String},
    email:{type:String},
    password:{type:String}
>>>>>>> c1ed7c50b559191962712fbf44dc4be41ab3a184
})


export const User = mongoose.model("User",userSchema);