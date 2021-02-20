import { User } from './../entity/user.entity';
import { Repository } from "typeorm";


//infrastructure
  export class UserRepository extends Repository<User>{

   async Add(userInput:any){
     const user = await this.create(userInput)
     return user
   }
 }


 export default UserRepository