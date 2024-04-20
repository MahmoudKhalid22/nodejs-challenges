import { Model } from "mongoose";
import { User } from "./user.schema";
import { CreateUserDto } from "./dto/create-user-dto";

export class UserRepo {
    constructor(private readonly model:Model<any>){
        this.model = model
    }
    create(input: CreateUserDto){
        this.model.create(input)      
    }
    
}