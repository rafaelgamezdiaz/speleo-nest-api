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
   * Create's new user
   * @param createUserDto
   */
  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.usersRepository.createUser(createUserDto);
  }

  /**
   * List all users
   */
  async findAll() {
    return await this.usersRepository.find();
  }

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

  /**
   * Updates user status (ACTIVE/INACTIVE)
   * @param id
   * @param status
   */
  async updateUserStatus(id: number, status: UsersStatus): Promise<User> {
    const user = await this.findUserById(id);
    user.status = status;
    return await user.save();
  }


  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
