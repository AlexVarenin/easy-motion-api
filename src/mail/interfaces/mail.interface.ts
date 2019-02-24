import { Document } from 'mongoose';

export interface Mail extents Document {
	readonly name: string;
	readonly contacts: string;
	readonly text: string;
}