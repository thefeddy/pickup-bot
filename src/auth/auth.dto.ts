import { ApiProperty } from '@nestjs/swagger';

export class AuthLoginDto {
    @ApiProperty()
    readonly username: string;

    @ApiProperty()
    readonly password: string;
}
