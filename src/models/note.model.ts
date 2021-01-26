import mongoose, {Document, Schema} from 'mongoose';
import { ICompany } from './company.model';
import { IWorker } from './worker.model';

export interface INote extends Document{
    note: number;
    worker: IWorker['_id'];
    company: ICompany['_id'];
}

const noteSchema = new Schema({
    note: {type: Number, required: true},
    worker: {type: Schema.Types.ObjectId, required: true},
    company: {type: Schema.Types.ObjectId, required: true}
});

export default mongoose.model<INote>('Note', noteSchema);