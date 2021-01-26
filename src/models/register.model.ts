import { AccountTypeEnum } from "../enums/account-type.enum";
import { LangEnum } from "../enums/lang.enum";

export interface IRegister {
    company: string;
    city?: string;
    kvk: string;
    mail: string;
    password: string;
    phone: number;
    www?: string;
    logo?: string;
    description?: string[];
    hashtags?: string[];
    toolByTags?: boolean;
    lang?: LangEnum[];
    type: AccountTypeEnum
}