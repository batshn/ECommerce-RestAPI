import mongoose  from 'mongoose';

const Schema = mongoose.Schema;

export const CategorySchema = new Schema({
    catName: {
        type: String
    }
});