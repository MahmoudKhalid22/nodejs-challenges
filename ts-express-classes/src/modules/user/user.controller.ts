import express, {Request, Response} from "express";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user-dto";

export class UserController {
    private router = express.Router();
    constructor(private readonly service: UserService){
        this.service = service
    }

<<<<<<< HEAD
 createUser = (req: Request, res: Response) => {
    const input: CreateUserDto = req.body;
    res.send("user has been created")
=======
 createUser(req: Request, res: Response) {
    const input: CreateUserDto = req.body;
>>>>>>> c1ed7c50b559191962712fbf44dc4be41ab3a184
    return this.service.create(input);
  }
  me = async (req: Request, res: Response) => {
    const response = await this.service.findOne("1");
    res.json({ response });
  };
  initRoutes() {
    this.router.post("/", this.createUser);
    this.router.get("/", this.me);
  }
  getRouter() {
    return this.router;
  }
}