import express, {Request, Response} from "express";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user-dto";

export class UserController {
    private router = express.Router();
    constructor(private readonly service: UserService){
        this.service = service
    }

 createUser = (req: Request, res: Response) => {
    const input: CreateUserDto = req.body;
    res.send("user has been created")
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