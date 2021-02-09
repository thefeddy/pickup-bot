import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
    Unique,
    Index,
    BeforeInsert,
} from 'typeorm';



import { UsersRO } from './users.ro';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'Username',
        type: 'varchar',
        nullable: true,
        length: 50,
        comment: `Taken from Discord`,
    })
    username: string;

    @Column({
        type: 'varchar',
        nullable: false
    })
    password: string;

    toResponseObject(): UsersRO {
        const { id, username } = this;

        const responseObject: UsersRO = {
            id,
            username,
        };

        return responseObject;
    }
}
