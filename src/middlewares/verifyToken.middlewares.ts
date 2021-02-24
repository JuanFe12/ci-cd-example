import { NextFunction, Request, Response } from "express";

import jwt from "jsonwebtoken";
interface IPayload {
    _id: string,
    iat: number,
    exp: number
}
export const Tokenvalidation = (req:any, res:Response, next:NextFunction) =>{
    const token = req.header('auth-token')
    if(!token){
        return res.status(401).json('Access denied');
    }
    const payload = jwt.verify(token, process.env.TOKEN_SECRET || 'tokentest') as IPayload;
    req.userid = payload._id;

    next();
}