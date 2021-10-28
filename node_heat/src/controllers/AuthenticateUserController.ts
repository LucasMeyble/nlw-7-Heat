import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthendicateUserService";

class AuthenticateUserController {
  async handle(request: Request, response: Response){
    
    const service = new AuthenticateUserService();
    // service.execute();

  }
}

export { AuthenticateUserController }