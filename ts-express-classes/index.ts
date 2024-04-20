import express from 'express';
import {userController} from './src/modules/user/index';
import connectionDB from './src/utils/dbConnection';




const app = express();


app.use(express.json());


app.use("/user",userController.getRouter())
connectionDB();

app.listen(9000,() => {
    console.log("Server is running now on 9000")
})