import {
    Controller,
    Get,
    Render,
    HttpStatus,
    Res,
    Post,
    Body,
    Param,
    Req,
    ParseIntPipe,
    Patch,
    Delete,
    HttpException,
} from '@nestjs/common';

import { Request, Response } from 'express';
import { UsersService } from './users.service';
import { CreateUserDto } from './users.dto';
import {
    ApiTags,
    ApiProperty,
    ApiOkResponse,
    ApiResponse,
    ApiBadRequestResponse,
    ApiUnauthorizedResponse,
    ApiNotFoundResponse,
} from '@nestjs/swagger';

import { response } from 'express';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get('/')
    async list(@Res() res: Response): Promise<any> { }

    @Post('/register')
    @ApiOkResponse({ status: 200, description: 'User Added' })
    @ApiBadRequestResponse({ status: 404, description: 'Map Not Found' })
    public async register(
        @Res() res: Response,
        @Body() createUserDto: CreateUserDto,
    ): Promise<any> {
        const user = await this.usersService.create(createUserDto);
        return res.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            message: 'User Registered',
        });
    }
}
