import * as mongoose from 'mongoose';

export const MovieSchema = new mongoose.Schema({
    id: String,
	category: [Number],
	title: String,
	description: String
});