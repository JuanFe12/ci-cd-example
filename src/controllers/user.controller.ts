
import { Request } from "express";
import { createUser, deleteUsers } from "../services/user.services";
import  jwt  from "jsonwebtoken";
import { getRepository } from "typeorm";
import { User } from "../entity/user.entity";

export const userCreate = async (req:Request, res:any):Promise<any>=>{
  try{
    //saving User
    const {firstName, lastName,email, password, phone } = req.body
    const user = await createUser(firstName, lastName,email, password, phone)
    console.log(user);
    
    //token
    const token:string = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET || 'tokentest')
    res.header('auth-token', token).json(user)
   }
  catch(error){
    console.log(error) 
  }
 }

export const userDelete = (req:Request, res:any)=>{
  const {id} = req.body
  const user = deleteUsers(id)
  res.json(user)
}

export async function getUser(req: any, res: any): Promise<Response> {
  const { id } = req.params;
  const userRepository = getRepository(User); 
  const user = await userRepository.findOne(id)
  return res.json(user);
}