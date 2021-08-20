import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from '../modules/users/entities/user.entity';

/**
 * Type ORM config file
 */
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: parseInt(process.env.DB_PORT),
  username: 'postgres',
  password: 'postgres',
  database: 'espeleo_db',
  entities: [User],
  synchronize: true
};