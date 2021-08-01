import { UsersStatus } from '../enums/users-status.enum';

export class CreateUserDto {
  name: string;
  surname: string;
  lastname: string;
  gender: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  age: number;
  group: string; // speleological group
  role: string;
}
