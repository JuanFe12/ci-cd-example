import { Add, deleteUserr } from "../repository/user.repository";


  export const createUser = async(
    firstName:string, lastName:string, email:string, password:string, photoPrifile, isActive:boolean, phone:number
  ):Promise<any> => {
    try {
      const user = Add(firstName, lastName, email, password, photoPrifile, isActive, phone);
      return user;
    } catch (error) {
      return error;
    }
  }

  export const deleteUsers = (id: string) =>{
     const user = deleteUserr(id)
     return user
  }
