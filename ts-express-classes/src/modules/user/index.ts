import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { UserRepo } from "./user.repo";
import { User } from "./user.schema";

const userRepo = new UserRepo(User);
const userService = new UserService(userRepo);
export const userController = new UserController(userService);

userController.initRoutes();