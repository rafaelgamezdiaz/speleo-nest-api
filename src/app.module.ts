import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CavesModule } from './caves/caves.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from "./config/typeorm.config";
import { UsersRepository } from "./users/users.repository";

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UsersModule,
    CavesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
