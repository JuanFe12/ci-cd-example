import { PrimaryGeneratedColumn, Column, Entity, OneToMany} from "typeorm";
import { Publications } from "./publications.entity";

export enum UserRole {
    photographer = "admin",
    user = "regular"
}


@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    firstName?: string;

    @Column()
    lastName?: string;

    @Column()
    phone?: number;

    @Column({default: 'koala'})
    image?: string;

    @Column()
    email?: string;

    @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.user 
})
    role?: UserRole;

    @Column()
    password?: string;

    @Column({default: false})
    isActive?: boolean;

    @OneToMany(() => Publications, publications => publications.user)
    publications?: Publications[];
}