import { PrimaryGeneratedColumn, Column, Entity, ManyToOne} from "typeorm";
import { Publications } from "./publications.entity";

@Entity()
export class Comments{

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    comments?: string;

    @ManyToOne(() => Publications, publications => publications.comments)
    publications?: Publications;
}