import { ApiProperty } from '@nestjs/swagger';

export class UsersDTO {
    @ApiProperty({
        description: `Map's Id`,
        minimum: 1,
        type: Number,
    })
    readonly id: number;

    @ApiProperty({
        description: `Username`,
        minimum: 1,
        type: String,
    })
    readonly username: string;

    @ApiProperty({
        description: `User's Aliases`,
        minimum: 1,
        type: String,
    })
    readonly aliases: string;

}

export class CreateUserDto {
    @ApiProperty()
    readonly username: string;

    @ApiProperty()
    password: string;
}
