import { PrimaryGeneratedColumn, Column, Entity, ManyToOne} from "typeorm";
import { Publications } from "./publications.entity";

@Entity()
export class Likes{

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    likes?: string;

    @ManyToOne(() => Publications, publications => publications.likes)
    publications?: Publications;
    
}