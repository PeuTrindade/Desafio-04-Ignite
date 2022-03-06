import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const findUserByID = this.usersRepository.findById(user_id);

    if (!findUserByID) {
      throw new Error("User does not exists!");
    }

    const user = this.usersRepository.turnAdmin(findUserByID);
    return user;
  }
}

export { TurnUserAdminUseCase };
