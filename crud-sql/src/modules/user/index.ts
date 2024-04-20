import UserService from "./user.service";
import UserRepo from "./user.repo";
import UserController from "./user.controller";

const userRepo = new UserRepo();

const userService = new UserService(userRepo);

const userController = new UserController(userService);

userController.initRoutes();

export { userController as userRoutes };
