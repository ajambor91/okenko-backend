import mongoose, { Document, Schema } from "mongoose"
import { IDescription } from "./description.model";

export interface ICompany extends Document{
    company: string;
    kvk: string;
    mail: string;
    password: string;
    phone: number;
    www?: string;
    logo?: string;
    description: IDescription['_id'];
}

const CompanySchema: Schema = new Schema({
    company: {type: String, unique: true, required: true},
    kvk: {type: String, required: true},
    mail: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    phone: {type: Number, required: true, unique: true},
    www: {type: String, sparse: true},
    logo: {type: String},
    description: {type: Schema.Types.ObjectId}
});
export default mongoose.model<ICompany>('company', CompanySchema);