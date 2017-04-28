import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';

import { Task, Status } from '../tasks/task';
import { TASKS } from '../tasks/mock-task';

import { httpHeaders } from '../global.constants'

@Injectable()
export class TaskService {

    private taskUrl = '/api/tasks/123'

    constructor(private http: Http) {}

    getTasks(): Promise<Task[]> { 
    	console.log("[TaskService][getTasks]")

		let loginData = {
			"username" : "un",
			"password": "pw",
			"apiKey": "123",
			"devicePrint": "ert"
		};
		let body = JSON.stringify(loginData);

		let headers = new Headers(httpHeaders);
			
		let options = new RequestOptions({ headers: headers });

		return this.http.post(this.taskUrl, body, options)
				.toPromise()
				.then(this.extractData)
				.catch(this.handleError);
	}
	
	private extractData(res: Response) {
		let tasks: Task[] = [];
		let body = res.json();
		if(body.length > 0) {
			body.forEach((k:any) => {
			tasks.push({
					id: k.id,
					name: k.name,
					description: k.description,
					status: (k.status.toString() === "READY")? Status.Ready : (k.status.toString() === "INPROGRESS") ? Status.Inprogress : Status.Finished,
					startDate: new Date(k.startDate),
					duration: k.duration,
					notes: k.notes
				});
			});
		}	
		return tasks;
	}

	private handleError (error: Response | any) {
		// In a real world app, we might use a remote logging infrastructure
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		return Observable.throw(errMsg);
	}
}