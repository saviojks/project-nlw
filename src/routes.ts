import { Router } from "express";
import { SettingsController } from "./controllers/SettingsControllers";
import { UsersController } from "./controllers/UsersControllers";

const routes = Router();

const settingsController = new SettingsController()
const userController = new UsersController()

routes.post('/settings', settingsController.create);

routes.get('/settings', settingsController.list)

routes.post('/users', userController.create);

routes.get('/users', userController.list)



export { routes };