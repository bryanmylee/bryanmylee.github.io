export interface Achievement {
	name: string;
	description: string;
	organizer: string;
	position: string;
	year: number;
	imageSrc: string;
	details: Record<string, string[]>;
}
