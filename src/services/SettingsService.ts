import { getCustomRepository } from 'typeorm';
import { SettingRepository } from '../repositories/SettingsRepository';

interface ISettingsService {
    chat: boolean ;
    username: string ;
}

class SettingsService{
    async create({chat, username}: ISettingsService){
        const settingsRepository = getCustomRepository(SettingRepository)

        const userAlreadyExists = await settingsRepository.findOne({username})
        if(userAlreadyExists){
            throw new Error('User already exists')
        }
        const setting = settingsRepository.create({
            chat,
            username
        })

        await settingsRepository.save(setting)

        return setting;
    }
    async list(){
        const settingsRepository = getCustomRepository(SettingRepository)

        const setting = await settingsRepository.find()

        return setting;
    }
}

export {SettingsService}