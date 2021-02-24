
import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/user.entity";
import { Tokenvalidation } from "../middlewares/verifyToken.middlewares";
import  jwt  from "jsonwebtoken";

export const signIn = async (req:Request, res:any):Promise<any>=>{
  try{
    //saving User
    const userRepository = getRepository(User); 
    const user = await userRepository.findOne({email: req.body.email})
    if(!user) return res.status(400).json('email or password is wrong') 

    const password = userRepository.findOne({password: req.body.password})
    if(!password) return res.status(400).json('invalid password')       
    //create a token and expiered in one day 
    const token:string = jwt.sign({_id: user.id}, process.env.TOKEN_SECRET || 'token', {
        expiresIn: 60 * 60 * 24
    })
    res.header('auth-token', token).json(user)
  }
  catch(error){
    console.log(error) 
  }
  
}

export const profile = async(req: any, res: any) => {
    const userRepository = getRepository(User); 
    const user = await userRepository.findOne(req.userid)
    if(!user) return res.status(404).json('dont found user')

    res.json(user)
}