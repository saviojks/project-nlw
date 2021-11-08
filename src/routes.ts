import { Router } from "express";
import { SettingsController } from "./controllers/SettingsControllers";
import { UsersController } from "./controllers/UsersControllers";
import { MessagesController } from "./controllers/MessagesControllers";

const routes = Router();

const settingsController = new SettingsController()
const userController = new UsersController()
const messagesController = new MessagesController()

routes.post('/settings', settingsController.create);

routes.get('/settings', settingsController.list)

routes.post('/users', userController.create);

routes.get('/users', userController.list)

routes.post('/messages', messagesController.create);

routes.get('/messages', messagesController.list)

routes.get('/messages/:user_id', messagesController.showByUser)


//update?
export { routes };