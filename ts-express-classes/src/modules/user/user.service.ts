import { CreateUserDto } from "./dto/create-user-dto";
import { UserRepo } from "./user.repo";

export class UserService{
    constructor(private readonly repo: UserRepo){
        this.repo = repo
    }

    create(input: CreateUserDto){
        return this.repo.create(input);
    }

    findOne(id: string){
        return {
            id:id,
            name:"mahmoud",
            email:"mahmoud@mahmoud.com"
        }
    }
}