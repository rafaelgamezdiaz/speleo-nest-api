import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersRepository } from "./users.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { UsersStatus } from "./enums/users-status.enum";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository) {
  }

  /**
   * Creates new user
   * @param createUserDto
   */
  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.usersRepository.createUser(createUserDto);
  }

  /**
   * List all users
   */
  async findAll(): Promise<User[]> {
    return await this.usersRepository.findAll();
  }

  /**
   * Get user by id
   * @param id
   */
  async findUserById(id: number): Promise<User> {
    return await this.usersRepository.findUserById(id);
  }

  /**
   * Updates user status (ACTIVE/INACTIVE)
   * @param id
   * @param status
   */
  async updateUserStatus(id: number, status: UsersStatus): Promise<User> {
    return this.usersRepository.updateUserStatus(id, status);
  }


  /**
   * Update user
   * @param id
   * @param updateUserDto
   */
  async update(id: number, updateUserDto: UpdateUserDto): Promise<any> {
    return await this.usersRepository.updateUser(id, updateUserDto);
  }

  /**
   * Remove user (status: DELETED)
   * @param id
   */
  async remove(id: number) {
    return await this.usersRepository.removeUser(id);
  }
}
