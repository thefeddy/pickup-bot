import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Users } from '../users/users.entity';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('/login')
    async login(@Body() user: Users): Promise<any> {
        console.log(user)
        return this.authService.login(user);
    }
}