import { ApiProperty } from '@nestjs/swagger';

export class MapsDTO {
    @ApiProperty({
        description: `Map's Id`,
        minimum: 1,
        type: Number,
    })
    readonly id: number;

    @ApiProperty({
        description: `Map's Name`,
        minimum: 1,
        type: String,
    })
    readonly name: string;

    @ApiProperty({
        description: `Map's Aliases`,
        minimum: 1,
        type: String,
    })
    readonly aliases: string;

    @ApiProperty({
        description: `Map's File`,
        minimum: 1,
        type: String,
        format: 'binary',
    })
    readonly file: any;
}

export class CreateMapsDTO {
    @ApiProperty({
        description: `Map Name`,
        minimum: 1,
        type: String,
    })
    readonly name: string;
}

export class UpdateMapsDTO {
    @ApiProperty({
        description: `Map Name`,
        minimum: 1,
        type: String,
    })
    readonly name: string;

    @ApiProperty({
        description: `Map's File`,
        minimum: 1,
        type: String,
        format: 'binary',
    })
    readonly file: any;
}
