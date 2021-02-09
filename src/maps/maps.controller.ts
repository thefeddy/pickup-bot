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
} from '@nestjs/common';
import { Request, Response } from 'express';
import { MapService } from './maps.service';
import { Maps } from './maps.entity';
import { MapsDTO, CreateMapsDTO } from './maps.dto';

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

@ApiTags('Maps')
@Controller('maps')
export class MapsController {
    constructor(private mapService: MapService) { }

    @Get('/')
    async list(@Res() res: Response): Promise<any> {
        const maps = await this.mapService.findAll();
        return res.status(HttpStatus.OK).json({ maps });
    }

    @Post('/add')
    async create(@Body() mapsPayload: CreateMapsDTO): Promise<any> {
        const maps = await this.mapService.add(mapsPayload);
        console.log(maps);
        return maps;
    }

    @Patch('/:name')
    async update(): Promise<any> { }

    @Delete('/:name')
    async delete(): Promise<any> { }

    @Get('/:name')
    @ApiOkResponse({ status: 200, description: 'Found Map', type: MapsDTO })
    @ApiBadRequestResponse({ status: 404, description: 'Map Not Found' })
    async get(@Param('name') name: string, @Res() res: Response): Promise<any> {
        const map: Maps = await this.mapService.findByName(name);
        if (!map) {
            return res.status(HttpStatus.NOT_FOUND).json({
                message: 'This Map was not found',
            });
        }
        return res.status(HttpStatus.OK).json({
            ...map.toResponseObject(),
        });
    }
}
