import { Http } from '@angular/http';
import { Task } from '../tasks/task';
export declare class TaskService {
    private http;
    private taskUrl;
    constructor(http: Http);
    getTasks(): Promise<Task[]>;
    private extractData(res);
    private handleError(error);
}
