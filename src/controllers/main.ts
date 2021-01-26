import { Request, Response } from 'express';
import company, {ICompany} from '../models/company.model';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
export class MainController{
    main(req: Request, res: Response): void{
        company.create({name:'atesst',company: 'dupa' })
        res.send('ok');
    }

    async get(req: Request, res: Response){

        const model = await company.find({name:'atesst'}).exec();
        res.send(model);
    }

    login(req: Request, res: Response){
        dotenv.config();
        let token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: 'foobar'
          }, process.env.APP_TOKEN);

          res.send(token);
    }

}