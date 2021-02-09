import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MapsController } from './maps.controller';

import { Maps } from './maps.entity';
import { MapService } from './maps.service';

@Module({
    imports: [TypeOrmModule.forFeature([Maps])],
    providers: [MapService],
    controllers: [MapsController],
})
export class MapsModule { }
