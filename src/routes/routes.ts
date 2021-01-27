import express, { Request, Response } from  'express';
import {MainController} from '../controllers/main';
import {SecurityController} from '../controllers/security.controller';
import {JWTHelper} from '../jwt/jwt';
import dotenv from 'dotenv';

const router = express.Router();
const mainController = new MainController();
const securityController = new SecurityController();

dotenv.config();

export = router
.get('/auth', JWTHelper.workerAccess, (req: Request, res: Response) => {
    res.send('autoryzacja dziala');
})
.get('/test', (req: Request, res: Response) => {
    mainController.get(req,res);
})
.get('/dupa',(req: Request, res: Response) => {
    mainController.main(req,res);
})
.get('/login', (req: Request, res: Response) => {
    mainController.login(req, res);
})
.post('/register', (req: Request, res: Response) => {
    securityController.registerAccount(req, res);
});

