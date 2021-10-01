import { Request, Response } from "express";
import { MessagesService } from '../services/MessagesService';


class MessagesController {
    async create(request: Request, response: Response){
        const { admin_id,text, user_id } = request.body;

        const messagesService = new MessagesService()

       try {
        const message = await messagesService.create({ admin_id ,text, user_id })
            
        return response.status(201).json(message)
       } catch (error) {
           return response.status(409).json({ message: error.message})
       }
    }
    
    async list(request: Request, response: Response){

        const messagesService = new MessagesService()

       try {
        const message = await messagesService.list()
            
        return response.status(200).json(message)
       } catch (error) {
           return response.status(409).json({ message: error.message})
       }
    }

    async showByUser(request: Request, response: Response){
        const { user_id } = request.params
        const messagesService = new MessagesService()

       try {
        const list = await messagesService.listByUser(user_id)
            
        return response.status(200).json(list)
       } catch (error) {
           return response.status(409).json({ message: error.message})
       }
    }
}

export {MessagesController}