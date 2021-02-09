import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Users } from './users.entity';
import { CreateUserDto } from './users.dto';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private userRepository: Repository<Users>,
    ) { }

    findAll(): Promise<Users[]> {
        return this.userRepository.find();
    }

    async findOne(username: string): Promise<Users> {
        return this.userRepository.findOne({
            where: { username },
        });
    }
    public async create(user: CreateUserDto): Promise<Users> {

        const { username } = user;
        user.password = await bcrypt.hash(user.password, 10);

        const users = await this.userRepository.findOne({
            where: { username },
        });

        if (users) {
            throw new HttpException('user Already Exists', HttpStatus.FOUND);
        }

        return await this.userRepository.save(user);

    }
}
