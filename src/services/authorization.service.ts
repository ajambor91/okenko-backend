import { AccountTypeEnum } from "../enums/account-type.enum";
import CompanyModel, { ICompany } from "../models/company.model";
import WorkerSchema, { IWorker } from "../models/worker.model";
import { IRegister } from "../models/register.model";

export class AuthorizationService {
    account: IRegister;

    public registerAccount(account: IRegister): Promise<boolean> {
        let test: Promise<boolean>;
        if (account.type === AccountTypeEnum.Company) {
            const companyData: ICompany = {} as ICompany;
            Object.assign(companyData, account);
            console.log('assign', companyData)
            return  this.createCompanyAccount(companyData);
        }
        // } else if (account.type === AccountTypeEnum.Worker){
        //     const workerData: IWorker = {} as IWorker;
        //     Object.assign(workerData, account);
        //     // test = this.createWorkerAccount(workerData);
        // }
    }

    private createCompanyAccount(account: ICompany): Promise<boolean> {
        const company = new CompanyModel(account);
        return company.save().then(result => {
            return true;
        });
    }

    // private createWorkerAccount(account: IWorker): boolean {
    //     const worker = new WorkerSchema(account);
    //     worker.save((err, company): b => {
    //         if(err) return false;
    //         return true;
    //     });
    //     return false;
    // }

}