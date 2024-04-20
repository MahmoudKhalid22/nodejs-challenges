<<<<<<< HEAD
import { Router } from "express";
const router = Router();
import { createUser,loginUser,updateUser, deleteUser,getUser } from "../controller/users";

// create user
router.post("/signup", createUser);

// get user
router.get("/:id",getUser);


// LOGIN
router.post("/login",loginUser)


// update user
router.patch("/update/:id",updateUser);

// delete user
router.delete("/delete/:id",deleteUser);

// follow a user



// unfollow a user


module.exports = router;
=======
import { Router } from "express";
const router = Router();
import { createUser,loginUser,updateUser, deleteUser,getUser } from "../controller/users";

// create user
router.post("/signup", createUser);

// get user
router.get("/:id",getUser);


// LOGIN
router.post("/login",loginUser)


// update user
router.patch("/update/:id",updateUser);

// delete user
router.delete("/delete/:id",deleteUser);

// follow a user



// unfollow a user


module.exports = router;
>>>>>>> c1ed7c50b559191962712fbf44dc4be41ab3a184
