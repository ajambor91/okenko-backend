import mongoose, {Document, Schema} from 'mongoose';

export interface IHashTag extends Document{
    name: string;
}

const hashtagSchema = new Schema({
    name: {type: String, required: true, unique: true}
});

export default mongoose.model<IHashTag>('HashTag', hashtagSchema);