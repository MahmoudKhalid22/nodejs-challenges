import { Query } from "mysql";
import { RepoType } from "../../utils/DAO";
import UserRepo from "./user.repo";

class UserService {
  private readonly repo: RepoType;

  constructor(repo: RepoType) {
    this.repo = repo;
  }

  async createUser(id: number, name: string, email: string) {
    // Validation logic if needed
    return this.repo.createUser(id, name, email);
  }

  // Other service functions
}

export default UserService;
