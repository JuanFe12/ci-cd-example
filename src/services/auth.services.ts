import { login } from "../repository/auth.repository";


  export const loginS = async(email):Promise<any> => {
    try {
      const user = login(email);
      return user;
    } catch (error) {
      return error;
    }
  }