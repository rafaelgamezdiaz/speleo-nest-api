import { EntityRepository, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from "./dto/create-user.dto";

@EntityRepository(User)
export class UsersRepository extends Repository<User> {

  /**
   * Create user
   * @param createUserDto
   */
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = this.create(createUserDto);
    return await user.save();
  }

}