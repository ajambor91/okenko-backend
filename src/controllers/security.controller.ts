import {Request, Response} from 'express';
import { ILoginPaylod } from '../models/login-paylod.model';
import { IRegister } from '../models/register.model';
import {AuthorizationService} from '../services/authorization.service';
export class SecurityController{

   private authorizationService: AuthorizationService;
    
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
            res.send('nie dzia;a')
        });
    }

    loginUser(req: Request, res: Response): void {
        const payload: ILoginPaylod = req.body;
        this.authorizationService.loginUser(payload).then((result: string) => {
            if (result != null) {
                res.send(result);
            }
            else{
                res.status(401).send('Unauthorized');
            }
        });
    }
}