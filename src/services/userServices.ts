import { Repository } from "typeorm";
import { AppDataSource } from "../database/connection";
import { User } from "../database/entity/userEntity";
import { IUser } from "../@types/types";

const UserRepo: Repository<User> = AppDataSource.getRepository(User);

class UserService {
  static async saveUser(user: IUser) {
    const newUser = UserRepo.save(user);
    return newUser;
  }
  static async getUserByEmail(email: string) {
    const user = UserRepo.findOneBy({ email });
    return user;
  }
}

export default UserService;
