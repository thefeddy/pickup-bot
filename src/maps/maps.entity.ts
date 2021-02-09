import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
    Unique,
    Index,
} from 'typeorm';

import { MapRO } from './maps.ro';

@Entity()
export class Maps {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'name',
        type: 'varchar',
        nullable: true,
        length: 50,
        comment: `Charater's name`,
    })
    name: string;

    toResponseObject(): MapRO {
        const { id, name } = this;

        const responseObject: MapRO = {
            id,
            name,
        };

        return responseObject;
    }
}
