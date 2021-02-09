import { Module, HttpModule } from '@nestjs/common';
import { DiscordController } from './discord.controller';
import { DiscordService } from './discord.service';

@Module({
    controllers: [DiscordController],
    imports: [HttpModule],
    providers: [DiscordService],
    exports: [DiscordService]
})
export class DiscordModule { }