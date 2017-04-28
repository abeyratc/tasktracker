import { async, inject, TestBed, ComponentFixture } from '@angular/core/testing';
import {
  Http, HttpModule, XHRBackend, ResponseOptions,
  Response, BaseRequestOptions
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { Task, Status } from '../task';
import { TASKS } from '../mock-task';

import { TaskBoardComponent } from './task-board.component';
import { TaskCardComponent } from '../task-card/task-card.component';
import { TaskFormComponent } from '../task-form/task-form.component';
import { TaskService } from '../task.service';

@Component({template: ''})
class MockTaskCardComponent {
}

@Component({template: ''})
class MockTaskFormComponent {
}

class MockTaskService extends TaskService {
	getTasks(): Promise<Task[]> {
		return Promise.resolve(TASKS);
	}
}

let comp:TaskBoardComponent;
let fixture: ComponentFixture<TaskBoardComponent>;

describe('Task Board Component', () => {

	beforeEach(async(() => {
		TestBed.configureTestingModule({

			declarations: [
				MockTaskCardComponent,
				MockTaskFormComponent,
				TaskBoardComponent,
				TaskCardComponent,
				TaskFormComponent
			],

			providers: [
				{	provide: TaskService, 
					useClass: MockTaskService 
				},
				{
					provide: Http, useFactory: (backend: XHRBackend, options: BaseRequestOptions) => {
						return new Http(backend, options);
					},
					deps: [MockBackend, BaseRequestOptions]
				},
				MockBackend,
				BaseRequestOptions,
			]
		})
		.overrideDirective(TaskCardComponent, MockTaskCardComponent)
		.overrideDirective(TaskFormComponent, MockTaskFormComponent)
		.compileComponents().then(()=> {
			fixture = TestBed.createComponent(TaskBoardComponent);
			comp = fixture.componentInstance;
			comp.ngOnInit();
		});
	}));

	it('should define the task board component ', () => {
		fixture.detectChanges();

		expect(comp).toBeDefined();
		expect(comp instanceof TaskBoardComponent).toBe(true);
	});

	it('should populate the correct table headers ', () => {
		fixture.detectChanges();
		let el = fixture.debugElement.nativeElement;
		let tableHeader = el.getElementsByTagName("th");

		expect(tableHeader[0].innerHTML).toMatch('READY');
		expect(tableHeader[1].innerHTML).toMatch('STARTED');
		expect(tableHeader[2].innerHTML).toMatch('FINISHED');
	});

	it('should populate the first card in READY column ', () => {
		fixture.detectChanges();
		let el = fixture.debugElement.nativeElement;
		let tableRows = el.getElementsByTagName("tr");
		let cells = tableRows[1].getElementsByTagName("td");

		expect(cells[0].innerHTML).toContain('task-card');
		expect(cells[1].innerHTML).not.toContain('task-card');
		expect(cells[2].innerHTML).not.toContain('task-card');
	});

	it('should populate second card in the STARTED column ', () => {
		fixture.detectChanges();
		let el = fixture.debugElement.nativeElement;
		let tableRows = el.getElementsByTagName("tr");
		let cells = tableRows[2].getElementsByTagName("td");

		expect(cells[0].innerHTML).not.toContain('task-card');
		expect(cells[1].innerHTML).toContain('task-card');
		expect(cells[2].innerHTML).not.toContain('task-card');
	});

	it('should populate last card in the FINISHED column ', () => {
		fixture.detectChanges();
		let el = fixture.debugElement.nativeElement;
		let tableRows = el.getElementsByTagName("tr");
		let cells = tableRows[4].getElementsByTagName("td");

		expect(cells[0].innerHTML).not.toContain('task-card');
		expect(cells[1].innerHTML).not.toContain('task-card');
		expect(cells[2].innerHTML).toContain('task-card');
	});
});