import { UserController } from './../controllers/user.controller';
import { Router } from "express";

const router = Router();

//User
router.post("/user", new UserController().userCreate);

//Auth


export default router;