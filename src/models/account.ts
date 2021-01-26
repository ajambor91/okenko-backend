import mongoose, { Document, Schema } from "mongoose"

export interface IAccount extends Document{
    name: string;
    company?: string;
}

const account: Schema = new Schema({
    name: {type: String, unique: true, required: true},
    company: {type: String}
});

export default mongoose.model<IAccount>('Account', account);