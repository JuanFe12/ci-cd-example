
import { Request } from "express";
import { createUser, deleteUsers } from "../services/user.services";
import { encryptPassword } from "../utils/password.utils";
import  jwt  from "jsonwebtoken";
export const userCreate = async (req:Request, res:any):Promise<any>=>{
  try{
    //saving User
    const {firstName, lastName,email, password, photoPrifile, isActive, phone} = req.body
    let passEncriptada = encryptPassword(password)
    const newUser = await createUser(firstName, lastName,email, await passEncriptada, photoPrifile, isActive, phone)
    //token
    const token:string = jwt.sign({_id: newUser._id}, process.env.TOKEN_SECRET || 'tokentest')
    res.header('auth-token', token).json(newUser)
    return {
      status: 200,
      message: 'the user is createed',
      body: newUser
    }
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
