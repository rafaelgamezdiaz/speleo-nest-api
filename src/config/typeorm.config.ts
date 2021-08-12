import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from '../modules/users/entities/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'espeleo_db',
  entities: [User],
  synchronize: true
};