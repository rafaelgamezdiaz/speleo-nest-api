import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../modules/users/entities/user.entity';
import { Membership } from '../common/membership/entities/membership.entity';
import { Cave } from '../modules/caves/entities/cave.entity';
import { CaveRegister } from '../modules/caves/cave-register/entities/cave-register.entity';
import { Geology } from '../modules/caves/geology/entities/geology.entity';
import { Paleontology } from '../modules/caves/paleontology/entities/paleontology.entity';
import { TypeExcavation } from "../common/type-excavation/entities/type-excavation.entity";
import { NameOrigin } from "../common/name-origin/entities/name-origin.entity";
import { TypeCave } from "../common/type-cave/entities/type-cave.entity";
import { CaveCondition } from "../common/cave-conditions/entities/cave-condition.entity";
import { TopographyMethod } from "../common/topography-method/entities/topography-method.entity";
import { Province } from "../common/province/entities/province.entity";
import { LocationArea } from "../common/location-area/entities/location-area.entity";

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
  entities: [
    User,
    Membership,
    Cave,
    CaveRegister,
    Geology,
    Paleontology,
    TypeExcavation,
    NameOrigin,
    TypeCave,
    CaveCondition,
    TopographyMethod,
    Province,
    LocationArea
  ],
  synchronize: true,
};
