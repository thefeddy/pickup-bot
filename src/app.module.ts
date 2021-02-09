import { Module, HttpModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule, Routes } from 'nest-router';


/* Services */
import { DiscordService } from './discord/discord.service';

/* Modules */
import { DiscordModule } from './discord/discord.module';
import { MapsModule } from './maps/maps.module';
import { UsersModule } from './users/users.module';
import { AdminModule } from './admin/admin.module';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthModule } from './auth/auth.module';

/* Entities */
import { Maps } from './maps/maps.entity';
import { Users } from './users/users.entity';

const routes: Routes = [
    {
        path: '/',
        module: LoginModule,
    },
    {
        path: '/dashboard',
        module: DashboardModule,
    }
];

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
        }),
        TypeOrmModule.forRootAsync({
            useFactory: () => ({
                type: 'postgres',
                host: process.env.TYPEORM_HOST,
                port: Number(process.env.TYPEORM_PORT),
                username: process.env.TYPEORM_USERNAME,
                password: process.env.TYPEORM_PASSWORD,
                database: process.env.TYPEORM_DATABASE,
                entities: [Maps, Users],
                synchronize: true,
            }),
        }),
        RouterModule.forRoutes(routes),
        DiscordModule,
        MapsModule,
        UsersModule,
        AdminModule,
        HttpModule,
        LoginModule,
        DashboardModule,
        AuthModule
    ],
    providers: [DiscordService],
})
export class AppModule { }
