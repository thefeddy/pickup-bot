import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy'
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller'
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { Users } from '../users/users.entity'

@Module({
    imports: [
        TypeOrmModule.forFeature([Users]),
        JwtModule.register({
            secret: `L|~:y?UzbG%sV:-3iGgRPTix@QA;]ixUzs'bH84|.< "UQ17PJJIeV!li'zJ0}I`
        })
    ],
    providers: [AuthService, UsersService],
    controllers: [AuthController],
})
export class AuthModule { }
