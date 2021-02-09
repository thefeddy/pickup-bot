import {
    Controller,
    Get,
    Render,
    Res,
    UseGuards
} from '@nestjs/common';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';


@Controller('')
export class DashboardController {
    constructor() { }
    @Get('/')
    @Render('dashboard/index')
    async index() {

    }

    @Get('/maps')
    @Render('dashboard/maps')
    async maps() {

    }
}
