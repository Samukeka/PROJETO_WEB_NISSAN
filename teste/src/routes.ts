import { Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './services/user/AuthUserController';
const router = Router();

router.post('/users',new CreateUserController().handle) 
router.post('/session',new AuthUserController().handle);

export { router };