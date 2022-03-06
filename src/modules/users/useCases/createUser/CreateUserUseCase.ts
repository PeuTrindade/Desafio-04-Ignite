import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ name, email }: IRequest): User {
    const findUserByEmail = this.usersRepository.findByEmail(email);

    if (findUserByEmail) {
      throw new Error("User already exists");
    }

    const user = this.usersRepository.create({ name, email });
    return user;
  }
}

export { CreateUserUseCase };
