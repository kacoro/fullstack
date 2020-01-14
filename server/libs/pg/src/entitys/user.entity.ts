import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

console.log("testUser")
@Entity("users")
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userName: string;

    @Column()
    email: string;

    @Column()
    password: string;

}