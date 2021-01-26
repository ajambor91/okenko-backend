import mongoose, {Schema, Document} from 'mongoose';
import { TermEnum } from '../enums/term.enum';

export interface ITerm extends Document {
    term: Date;
    type: TermEnum;
}

const termSchema: Schema = new Schema({
    term: {type: Date, required: true},
    type: {type: TermEnum, required: true}
});

export default mongoose.model<ITerm>('Term', termSchema);