import { AccountTypeEnum } from "../enums/account-type.enum";
import { ICompany } from "../models/company.model";
import { IWorker } from "../models/worker.model";
import { IRegister } from "../models/register.model";
import { SecurityRepository } from "../repository/security.repository";
import { ILoginPaylod } from "../models/login-paylod.model";
import { JWTHelper } from "../jwt/jwt";

export class AuthorizationService {
    account: IRegister;
    private securityRepository: SecurityRepository;

    constructor(){
        this.securityRepository = new SecurityRepository();
    }

    async registerAccount(account: IRegister): Promise<boolean> {

        if (account.type === AccountTypeEnum.Company) {
            const companyData: ICompany = {} as ICompany;
            Object.assign(companyData, account);
            return await this.securityRepository.createCompanyAccount(companyData);
        } else if (account.type === AccountTypeEnum.Worker) { 
            const workerData: IWorker = {} as IWorker;
            Object.assign(workerData, account);
            return await this.securityRepository.createWorkerAccount(workerData);
        }
    }

    async loginUser(payload: ILoginPaylod): Promise<string> {
        let account: IWorker | ICompany = await this.securityRepository.loginWorker(payload);
        let type = AccountTypeEnum.Worker;
        if(account == null){ 
            account = await this.securityRepository.loginCompany(payload);
            type = AccountTypeEnum.Company;
        }
        if( account != null){
            return JWTHelper.login(account, type);
        }
        return null;
    }
}