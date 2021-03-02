import { Request, Response } from 'express'
import {getRepository} from "typeorm";
import {Publications} from "../entity/publications.entity";

export async function createPhoto(req: Request, res: Response): Promise<Response> {
    const { title, description } = req.body;
    const newPhoto = { title, description, imagePath: req.file.path };

    const userRepository = getRepository(Publications); // you can also get it via getConnection().getRepository() or getManager().getRepository()
    const photo = userRepository.save(newPhoto)
    return res.json({
        status: 200,
        message: 'Photo Saved Successfully',
        body: photo
    });
};

export async function deletePhoto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const userRepository = getRepository(Publications) ;
    userRepository.findOne(id);
    return res.json({ message: 'Photo Deleted' });
};