import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Maps } from './maps.entity';
import { CreateMapsDTO } from './maps.dto';

@Injectable()
export class MapService {
    constructor(
        @InjectRepository(Maps)
        private mapRepository: Repository<Maps>,
    ) { }

    findAll(): Promise<Maps[]> {
        return this.mapRepository.find();
    }

    async findByName(name: string): Promise<Maps> {
        console.log(name);
        return this.mapRepository.findOne({
            where: { name },
        });
    }

    async add(map: CreateMapsDTO): Promise<Maps> {
        const { name } = map;
        const maps = await this.mapRepository.findOne({
            where: { name },
        });

        if (maps) {
            throw new HttpException('Map already exists', HttpStatus.FOUND);
        }

        return await this.mapRepository.save(map);
    }

    async remove(id: number): Promise<void> {
        await this.mapRepository.delete(id);
    }
}
