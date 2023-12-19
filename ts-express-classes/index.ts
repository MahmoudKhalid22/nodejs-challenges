import express from 'express';
import {userController} from './src/modules/user/index';


const app = express();


app.use(express.json());


app.use("/user",userController.getRouter())


app.listen(9000,() => {
    console.log("Server is running now on 9000")
})