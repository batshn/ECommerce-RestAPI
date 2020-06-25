import mongoose  from 'mongoose';

const Schema = mongoose.Schema;

export const CategorySchema = new Schema({
    cat_id: {
        type: Number
    },
    cat_name: {
        type: String
    }
});