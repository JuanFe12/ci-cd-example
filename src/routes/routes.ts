  
import {  userCreate, userDelete } from './../controllers/user.controller';
import { Router } from "express";
import { profile, signIn } from '../controllers/auth.controller';
import { Tokenvalidation } from "../middlewares/verifyToken.middlewares";

const router = Router();

//User
router.get("/profile", Tokenvalidation, profile);
router.post("/user", userCreate);
router.delete("/users",userDelete);


//Auth
router.post('/signIn', signIn)
export default router;