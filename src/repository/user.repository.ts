import { User } from './../entity/user.entity';
import { getRepository } from "typeorm";

//infrastructure

export const Add = async (
  firstName:string, lastName:string, email:string, password:string, phone:number
  ) => {
    const userRepository = getRepository(User); 
    const user = await userRepository.save({firstName, lastName, email, password, phone })
    return user
  }

        export const deleteUserr = async(id:string) =>{
          const userRepository = getRepository(User); 
          const user = await userRepository.delete(id)
          return user;
        }