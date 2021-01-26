import express, { Request, Response } from  'express';
import {MainController} from '../controllers/main';
const router = express.Router();
const mainController = new MainController();
export = router
.get('/test', (req: Request, res: Response) => {
    console.log('router')
    // mainController.main(req,res);
    res.send('ddd')
})
.get('/dupa',(req: Request, res: Response) => {
    console.log('router')
    mainController.main(req,res);
  
})
