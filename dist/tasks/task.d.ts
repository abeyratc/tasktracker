export declare class Task {
    id: number;
    name: string;
    description: string;
    status: Status;
    startDate: Date;
    duration: number;
    notes: Note[];
}
export declare enum Status {
    Ready = 0,
    Inprogress = 1,
    Finished = 2,
}
export declare class Note {
    entryDate: Date;
    log: string;
}
