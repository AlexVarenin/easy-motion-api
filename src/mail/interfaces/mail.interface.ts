import { Document } from 'mongoose';

export interface Mail extends Document {
	readonly name: string;
	readonly contacts: string;
	readonly text: string;
}