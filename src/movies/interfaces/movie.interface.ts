import { Document } from 'mongoose';

export interface Movie extents Document {
	readonly id: string;
	readonly category: Array<number>;
	readonly title: string;
	readonly description: string;
}