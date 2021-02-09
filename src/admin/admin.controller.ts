import {
    Controller,
    Get,
    Render,
    Res,
} from '@nestjs/common';
import { Response } from 'express';

@Controller('admin')
export class AdminController {
    constructor() { }

    @Get('/')
    @Render('admin/index')
    async list(@Res() res: Response): Promise<any> {

    }
}
