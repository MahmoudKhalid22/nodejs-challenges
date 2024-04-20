import { RepoType } from "../../utils/DAO";
import db from "../../config/dbConnection";
import { Query } from "mysql";

class UserRepo implements RepoType {
  async createUser(id: number, name: string, email: string): Promise<Query> {
    return db.query(
      `INSERT INTO users (idusers, name, email) VALUES ('${id}', '${name}', '${email}')`
    );
  }
}

export default UserRepo;
