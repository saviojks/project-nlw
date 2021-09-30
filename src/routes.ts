import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsController } from "./controllers/SettingsControllers";
import { SettingRepository } from './repositories/SettingsRepository';

const routes = Router();

const settingsController = new SettingsController()

routes.post('/settings', settingsController.create);

routes.get('/', async (request, response) => {
   
    const settingsRepository = getCustomRepository(SettingRepository)
    
    const setting = settingsRepository.count()

    return response.status(200).json(setting)
})



export { routes };