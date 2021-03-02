  
import { getUser, userCreate, userDelete } from './../controllers/user.controller';
import { Router } from "express";
import { profile, signIn } from '../controllers/auth.controller';
import { Tokenvalidation } from "../middlewares/verifyToken.middlewares";
import { createPhoto, deletePhoto, getPublications } from '../controllers/publications.controller';
import upload from '../libs/multer'

const router = Router();

//User

router.route('/users')
    .get(Tokenvalidation, profile)
    .post(userCreate)
    .delete(userDelete)


router.route('/photos')
    .get(getUser)
    .delete(deletePhoto)
router.post('/publi' ,upload.single('imagePath'), createPhoto)
router.get('/publi',getPublications)

//Auth
router.post('/signIn', signIn)
export default router;