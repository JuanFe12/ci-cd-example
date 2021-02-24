import { User } from './../entity/user.entity';
import { getRepository } from "typeorm";

//infrastructure
export const login = async (email) => {
    const userRepository = getRepository(User); 
    const user = await userRepository.findOne(email)
    return user
}