import { UserServices } from './../services/user.services';


export class UserController{

  async userCreate(req:any){
    const userInput = req.body
    const user = new UserServices().registerUser(userInput)
    return{
      statusCode:200,
      message: 'El usuario es creado correctamente',
      body: user
    }
  }
} 


export default UserController;