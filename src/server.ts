import express from 'express';
import mongoose from 'mongoose';
import * as dbConfig from './config/db.json';
import router from './routes/routes';
import securityRoutes from './routes/security.routes';
class App{
    app = express();
    mongoose = mongoose;
    dbConfig = dbConfig;
    

    constructor() {
        this.connectToDb();   
        this.checkConnection();
    }

    private checkConnection(): void {
        this.mongoose.connection
            .on('error', () => {
                console.log('error')
            })
            .on('disconnected', () => {   
                this.connectToDb()
            })
            .once('open', () => {
                this.listen();
            });
    }

    private connectToDb(): any {
        return this.mongoose.connect(this.dbConfig.db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }

    private listen(): void {
        this.app.use(express.json());
        this.app.use('/', router);
        this.app.use('/security', securityRoutes);
        this.app.listen(3000, () => console.log('Example app listening on port 3000!'));
    }

}

const app = new App();

