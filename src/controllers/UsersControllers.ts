import { Request, Response } from "express";
import { UsersService } from '../services/UsersService';


class UsersController {
    async create(request: Request, response: Response) : Promise<Response>{
        const { email } = request.body;

        const usersService = new UsersService()

       try {
        const user = await usersService.create(email)
            
        return response.status(201).json(user)
       } catch (error) {
           return response.status(409).json({ message: error.message})
       }
    }
    async list(request: Request, response: Response){

        const usersService = new UsersService()

       try {
        const user = await usersService.list()
            
        return response.status(200).json(user)
       } catch (error) {
           return response.status(409).json({ message: error.message})
       }
    }
}

export {UsersController}