import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersStatus } from './enums/users-status.enum';
import { UserStatusValidationPipe } from './pipes/user-status-validation.pipe';

@Controller('/api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * Create user
   * @param createUserDto
   */
  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  /**
   * List all users
   */
  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  /**
   * Get user by ID
   * @param id
   */
  @Get('/:id')
  getUserById(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.usersService.findUserById(id);
  }

  /**
   * Update user
   * @param id
   * @param updateUserDto
   */
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto): Promise<any> {
    return this.usersService.update(id, updateUserDto);
  }

  /**
   * Update user status
   * @param id
   * @param status
   */
  @Patch('/:id/status')
  updateUserStatus(
    @Param('id') id: number,
    @Body('status', UserStatusValidationPipe) status: UsersStatus,
  ) {
    return this.usersService.updateUserStatus(id, status);
  }

  /**
   * Remove user (status: DELETED)
   * @param id
   */
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }
}
