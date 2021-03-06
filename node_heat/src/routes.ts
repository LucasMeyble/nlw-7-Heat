import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { Get3LastMessagesController } from "./controllers/GetLast3MessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const routes = Router();

routes.post("/authenticate", new AuthenticateUserController().handle);

routes.post(
  "/messages", 
  ensureAuthenticated, 
  new CreateMessageController().handle
);

routes.get("/messages/last3", new Get3LastMessagesController().handle);

routes.get("/profile", ensureAuthenticated, new ProfileUserController().handle);

export {routes}