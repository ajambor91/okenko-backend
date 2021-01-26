import { Request, Response } from 'express';
import account, {IAccount} from '../models/account';

export class MainController{
    main(req: Request, res: Response): void{
        account.create({name:'atesst',company: 'dupa' })
        res.send('ok');
    }

    async get(req: Request, res: Response){

        const model = await account.find({name:'atesst'}).exec();
        res.send(model);
    }

}