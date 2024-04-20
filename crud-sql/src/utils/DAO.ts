import { Query } from "mysql";

// ../../utils/DAO.ts
export interface RepoType {
  createUser(id: number, name: string, email: string): Promise<any>;
  // Other methods...
}
