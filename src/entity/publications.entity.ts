import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, OneToMany} from "typeorm";
import { Comments } from "./comments.entity";
import { Likes } from "./likes.entity";
import { User } from "./user.entity";

@Entity()
export class Publications{

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    imagePath?: string;

    @Column()
    description?: string;

    @ManyToOne(() => User, user => user.publications)
    user?: User;

    @OneToMany(() => Comments, comments => comments.publications)
    comments?: Comments[];

    @OneToMany(() => Likes, likes => likes.publications)
    likes?: Likes[];

}