import { Document } from 'mongoose';

export interface Movie extends Document {
	readonly id: string;
	readonly category: Array<number>;
	readonly title: string;
	readonly description: string;
}