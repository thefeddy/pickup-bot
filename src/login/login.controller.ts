import {
    Body,
    Controller,
    Get,
    Post,
    Render,
    Res,
} from '@nestjs/common';

import { Response } from 'express';


@Controller('')
export class LoginController {
    constructor() { }

    @Get('/')
    @Render('login/index')
    async index(@Res() res: Response): Promise<any> {

    }
}
