import express from 'express';
import {userController} from './src/modules/user/index';
<<<<<<< HEAD
import connectionDB from './src/utils/dbConnection';


=======
>>>>>>> c1ed7c50b559191962712fbf44dc4be41ab3a184


const app = express();


app.use(express.json());


app.use("/user",userController.getRouter())
<<<<<<< HEAD
connectionDB();
=======

>>>>>>> c1ed7c50b559191962712fbf44dc4be41ab3a184

app.listen(9000,() => {
    console.log("Server is running now on 9000")
})