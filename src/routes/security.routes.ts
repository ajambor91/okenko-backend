import express, {Request, Response} from 'express';
import { SecurityController } from '../controllers/security.controller';

const securityRoutes = express.Router();
const securityController = new SecurityController();

export = securityRoutes
.post('/register', (req: Request, res: Response) => {
    securityController.registerAccount(req, res);
})
.post('/login', (req: Request, res: Response) => {
    securityController.loginUser(req, res);
});