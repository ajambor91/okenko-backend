import CompanySchema, { ICompany } from "../models/company.model";
import { ILoginPaylod } from "../models/login-paylod.model";
import WorkerSchema, { IWorker } from "../models/worker.model";
export class SecurityRepository{
    createCompanyAccount(account: ICompany): Promise<boolean> {
        const company = new CompanySchema(account);
        return company.save()
        .then((result: ICompany) => {
            return true;
        });
    }

    createWorkerAccount(account: IWorker): Promise<boolean> {
        const worker = new WorkerSchema(account);
        return worker.save()
        .then((result: IWorker) => {
            return true;
        });    
    }

    loginWorker(loginPayload: ILoginPaylod): Promise<IWorker> {
        return WorkerSchema.findOne({
            mail: loginPayload.login,
            password: loginPayload.password
        }).exec().then((res: IWorker) => res);
    }    

    loginCompany(loginPayload: ILoginPaylod): Promise<ICompany> {
        return CompanySchema.findOne({
            mail: loginPayload.login,
            password: loginPayload.password
        }).exec().then((res: ICompany) => res);
    }
}