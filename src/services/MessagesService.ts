import { getCustomRepository } from 'typeorm';
import { MessagesRepository } from '../repositories/MessagesRepository';

interface IMessagesService {
    admin_id?: string ;
    text: string ;
    user_id: string
}

class MessagesService{
    async create({admin_id,text,user_id}: IMessagesService){
        const messagesRepository = getCustomRepository(MessagesRepository)

        const message = messagesRepository.create({
            admin_id,
            text,
            user_id
        })

        await messagesRepository.save(message)

        return message;
    }
    async list(){
        const messagesRepository = getCustomRepository(MessagesRepository)

        const message = await messagesRepository.find()

        return message;
    }
}

export {MessagesService}