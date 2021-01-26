import express, { Request, Response } from  'express';
import {MainController} from '../controllers/main';
const router = express.Router();
const mainController = new MainController();
export = router
.get('/test', (req: Request, res: Response) => {
    console.log('router')
    mainController.get(req,res);
})
.get('/dupa',(req: Request, res: Response) => {
    console.log('router')
    mainController.main(req,res);
  
})

