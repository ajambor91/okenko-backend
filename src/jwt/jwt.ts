import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { ILoginPaylod } from '../models/login-paylod.model';
import { IWorker } from '../models/worker.model';
import { ICompany } from '../models/company.model';
import { AccountTypeEnum } from '../enums/account-type.enum';
export class JWTHelper{

    static adminAccess(req: Request, res: Response, next: NextFunction): void {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        const role = jwt.decode(token)['role'];
        if (token == null || role != AccountTypeEnum.Admin || JWTHelper.authorize(token)) {
            res.status(401).send({status: 'Unauthorized'});
        } 
        next();
    }

    static companyAccess(req: Request, res: Response, next: NextFunction): void {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        const role = jwt.decode(token)['role'];
        if (token == null || ![AccountTypeEnum.Admin, AccountTypeEnum.Company].includes(role) || JWTHelper.authorize(token)) res.status(401).send({status: 'Unauthorized'});
        next();
    }

    static workerAccess(req: Request, res: Response, next: NextFunction): void {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        const role = jwt.decode(token)['role'];
        if (token == null || ![AccountTypeEnum.Admin, AccountTypeEnum.Worker].includes(role) || this.authorize(token)) res.status(401).send({status: 'Unauthorized'});
        next();
    }

    static loggedAccess(req: Request, res: Response, next: NextFunction): void {
        dotenv.config();
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        const role = jwt.decode(token)['role'];
        if (token == null || ![AccountTypeEnum.Company, AccountTypeEnum.Worker].includes(role) || JWTHelper.authorize(token)) res.status(401).send({status: 'Unauthorized'});
        next();
    }

    static login(payload: IWorker | ICompany, type: AccountTypeEnum): string {
        dotenv.config();
        return jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            sub: payload['_id'],
            role: type
          }, process.env.APP_TOKEN); 
    }

    private static authorize(token): void {
        dotenv.config();
        jwt.verify(token, process.env.APP_TOKEN as string, (err: Error) => {
            if(err) return false;
            return true;
        });
    }
}