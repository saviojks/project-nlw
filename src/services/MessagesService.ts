import { getCustomRepository, getMongoManager, Repository, } from 'typeorm';
import { Message } from '../entities/Message';
import { MessagesRepository } from '../repositories/MessagesRepository';

interface IMessagesService {
    admin_id?: string ;
    text: string ;
    user_id: string
}

class MessagesService{
    private messagesRepository: Repository<Message>;

    constructor (){
        this.messagesRepository = getCustomRepository(MessagesRepository)
    }
    async create({admin_id,text,user_id}: IMessagesService){

        const message = this.messagesRepository.create({
            admin_id,
            text,
            user_id
        })

        await this.messagesRepository.save(message)

        return message;
    }

    async list(){

        const list = await this.messagesRepository.find()

        return list;
    }

    async listByUser(user_id: string){
        const mongo = getMongoManager()

        const mlistMongo = mongo.find('users')

        const list = await this.messagesRepository.find({
            where: {user_id},
            relations: ['user']
        })

        return list;
    }
}

export {MessagesService}