import { getCustomRepository, Repository } from 'typeorm';
import { Setting } from '../entities/Setting';
import { SettingRepository } from '../repositories/SettingsRepository';

interface ISettingsService {
    chat: boolean ;
    username: string ;
}

class SettingsService{
    private settingsRepository: Repository <Setting>

    constructor(){
        this.settingsRepository = getCustomRepository(SettingRepository)
    }
    async create({chat, username}: ISettingsService){

        const userAlreadyExists = await this.settingsRepository.findOne({username})
        
        if(userAlreadyExists){
            throw new Error('User already exists')
        }
        
        const setting = this.settingsRepository.create({
            chat,
            username
        })

        await this.settingsRepository.save(setting)

        return setting;
    }
    async list(){
        
        const setting = await this.settingsRepository.find()

        return setting;
    }
}

export {SettingsService}