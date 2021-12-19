export interface Experience {
	name: string;
	description: string;
	start: string;
	end?: string;
	imageSrc: string;
	details: Record<string, string[]>;
}
