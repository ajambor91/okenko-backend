import mongoose, {Document, Schema} from 'mongoose';
import { IWorker } from './worker.model';
export interface IDescription extends Document {
    pl?: string;
    nl?: string;
    en?: string;
    worker: IWorker['_id']
}

const description = new Schema({
    pl: { type: String },
    nl: { type: String },
    en: { type: String },
    worker: { type: Schema.Types.ObjectId }
})