import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';


@Module({
    imports: [],
    providers: [],
    controllers: [LoginController],
})

export class LoginModule { }
