import { Request, Response } from 'express'
import {getRepository} from "typeorm";
import {Publications} from "../entity/publications.entity";
import { User } from '../entity/user.entity';

export async function createPhoto(req: Request, res: Response): Promise<any> {

        try {
            const { description, userId } = req.body;
            const getid = getRepository(User); 
            const user = await getid.findOne(userId)
            const newPhoto = { description, user, imagePath: req.file.path };
        
            const userRepository = getRepository(Publications); // you can also get it via getConnection().getRepository() or getManager().getRepository()
            const photo = userRepository.save(newPhoto)
            return res.json({
                status: 200,
                message: 'Photo Saved Successfully',
                body: photo
            });
    }catch(e){
      console.log(e);
      
    }
 }

export async function deletePhoto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const userRepository = getRepository(Publications) ;
    userRepository.findOne(id);
    return res.json({ message: 'Photo Deleted' });
};



export async function getPublications(req: any, res: any): Promise<any> {
    const userRepository = getRepository(Publications) ;
    const publi = userRepository.find();

    return res.json(publi);
};