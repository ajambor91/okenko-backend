import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
export class JWTHelper{

    static authorize(req: Request, res: Response, next: NextFunction): void {
        dotenv.config();
        const authHeader = req.headers['authorization'];
        console.log(authHeader);
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null) res.status(401).send({status: 'Unauthorized'});
        jwt.verify(token, process.env.APP_TOKEN as string, (err: Error) => {
            console.log('error',err)
            if(err) return res.status(401).send('Unauthorized');
            next();
        })
        
    }
}