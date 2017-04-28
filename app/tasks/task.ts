export class Task {
	id: number;
	name: string;
	description: string;
	status: Status;
	startDate: Date;
	duration: number;
	notes: Note[];
}

export enum Status {
	Ready, Inprogress, Finished
}

export class Note {
	entryDate: Date;
	log: string;
}