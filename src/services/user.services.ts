import { UserRepository } from "..//repository/user.repository";

//domain
export class UserServices{
  
  async registerUser(userInput:any){
       new UserRepository().Add(userInput)
   }
}


export default UserServices