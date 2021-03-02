import { Add, deleteUserr } from "../repository/user.repository";


  export const createUser = async(
    firstName, lastName,email, password, phone
  ):Promise<any> => {
    try {
      const user = Add(firstName, lastName,email, password, phone );
      return user;
    } catch (error) {
      return error;
    }
  }

  export const deleteUsers = (id: string) =>{
     const user = deleteUserr(id)
     return user
  }
