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
        console.log(newPhoto);
        
    
        const userRepository = getRepository(Publications); // you can also get it via getConnection().getRepository() or getManager().getRepository()
        userRepository.save(newPhoto)
        return res.json({
            status: 200,
            message: 'Publication Saved Successfully',
            body: newPhoto
        });
    }catch(e){
      console.log(e);
      
    }
 }

export async function deletePublications(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const userRepository = getRepository(Publications) ;
    userRepository.findOne(id);
    return res.json({ message: 'Photo Deleted' });
    };



export async function getPublications(req: Request, res: Response): Promise<Response> {
    const userRepository = getRepository(Publications) ;
    const publi = userRepository.find();

    return res.json(publi);
};