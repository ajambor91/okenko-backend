import {Request, Response} from 'express';
import { IRegister } from '../models/register.model';
import {AuthorizationService} from '../services/authorization.service';
export class SecurityController{

    authorizationService: AuthorizationService;
    
    constructor() {
        this.authorizationService = new AuthorizationService();
    }

    registerAccount(req: Request, res: Response): void {
        const account: IRegister = req.body;
        this.authorizationService.registerAccount(account)
        .then((result: boolean) => {
            if(result) res.send('dzila');
            else res.send('not');
        })
        .catch(err => {
            console.log(err);
            res.send('nie dzia;a')
        });

    }
}