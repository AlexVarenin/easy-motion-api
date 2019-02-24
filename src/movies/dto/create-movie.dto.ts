export class CreateMovieDto {
	readonly id: string;
	readonly category: Array<number>;
	readonly title: string;
	readonly description: string;
}