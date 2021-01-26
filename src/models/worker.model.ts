import mongoose, {Document, Schema} from 'mongoose';
import { LangEnum } from '../enums/lang.enum';
import { IDescription } from './description.model';
import { IHashTag } from './hashtag.model';

export interface IWorker extends Document {
    company: string;
    city: string;
    kvk: string;
    mail: string;
    password: string;
    phone: number;
    www?: string;
    logo?: string;
    description: IDescription['_id'];
    hashtags: IHashTag['_id'];
    toolByTags: boolean;
    lang: LangEnum[];
}

const WorkerSchema: Schema = new Schema({
    company: { type: String, required: true },
    city: { type: String, required: true },
    kvk: { type: String, required: true },
    mail: { type: String, required: true, unique: true},
    password: {type: String, required: true},
    phone: { type: Number, required: true, unique: true},
    www: { type: String, unique: true },
    logo: { type: String },
    description: { type: Schema.Types.ObjectId },
    hashtags: { type: Schema.Types.ObjectId },
    toolByTags: {type: Boolean, required: true},
    lang: {type: Array, required: true}
});

export default mongoose.model<IWorker>('Worker', WorkerSchema);