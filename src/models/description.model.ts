import mongoose, {Document, Schema} from 'mongoose';

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