import { Module } from '@nestjs/common';
import { CavesService } from './caves.service';
import { CavesController } from './caves.controller';

@Module({
  controllers: [CavesController],
  providers: [CavesService]
})
export class CavesModule {}
