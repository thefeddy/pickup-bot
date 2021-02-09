import { Controller, Get, Render } from '@nestjs/common';
import { DiscordService } from './discord.service';

@Controller('discord')
export class DiscordController {
    constructor(private readonly discordService: DiscordService) { }

    @Get('/')
    index() {
    }
}
