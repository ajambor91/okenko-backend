import { Request, Response } from 'express';
export class MainController{
    main(req: Request, res: Response): void{
        res.send('dupa');
    }

}