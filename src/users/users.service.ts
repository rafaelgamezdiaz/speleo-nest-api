import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersRepository } from "./users.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { UsersStatus } from "./enums/users-status.enum";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository) {
  }

  /**
   *
   * @param createUserDto
   */
  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.usersRepository.createUser(createUserDto);
  }

  // findAll() {
  //   return `This action returns all users`;
  // }
  //

  /**
   * Get user by id
   * @param id
   */
  async findUserById(id: number): Promise<User> {
    const user = await this.usersRepository.findOne(id);
    if (!user) {
      throw new NotFoundException(`No existe un usuario con ID = ${id}`);
    }
    return user;
  }

  //
  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
