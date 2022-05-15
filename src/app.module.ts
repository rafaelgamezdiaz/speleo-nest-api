import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { CavesModule } from './modules/caves/caves.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ThrottlerModule } from '@nestjs/throttler';
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from './auth/auth.module';
import { MembershipModule } from './common/membership/membership.module';
import { NameOriginModule } from './common/name-origin/name-origin.module';
import { TypeCaveModule } from './common/type-cave/type-cave.module';
import { ProvinceModule } from './common/province/province.module';
import { LocationAreaModule } from './common/location-area/location-area.module';
import { CaveConditionsModule } from './common/cave-conditions/cave-conditions.module';
import { TopographyMethodModule } from './common/topography-method/topography-method.module';
import { TypeExcavationModule } from './common/type-excavation/type-excavation.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
    }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    UsersModule,
    CavesModule,
    AuthModule,
    MembershipModule,
    NameOriginModule,
    TypeCaveModule,
    ProvinceModule,
    LocationAreaModule,
    CaveConditionsModule,
    TopographyMethodModule,
    TypeExcavationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
