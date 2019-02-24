import * as mongoose from 'mongoose';

export const MailSchema = new mongoose.Schema({
	name: String,
	contacts: String,
	text: String
});