import { PrimaryGeneratedColumn, Column, Entity} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    firstName?: string;

    @Column()
    lastName?: string;

    @Column()
    phone?: string;

    @Column()
    photoPrifile?: string;

    @Column()
    isActive?: boolean;

}