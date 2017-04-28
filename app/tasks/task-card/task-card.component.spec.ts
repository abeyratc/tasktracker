import { async, inject, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { Task, Status } from '../task';
import { TASKS } from '../mock-task';

import { TaskCardComponent } from './task-card.component';
import { TaskHistoryComponent } from '../task-history/task-history.component';
import { StatusTransformPipe } from '../../pipes/status-trans/status-transform.pipe';
import { StringTruncatePipe } from '../../pipes/string-truncate/string-truncate.pipe';

@Component({template: ''})
class MockTaskHistoryComponent {}

let comp:TaskCardComponent;
let fixture: ComponentFixture<TaskCardComponent>;

describe('TaskCardComponent', () => {

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				MockTaskHistoryComponent,
				TaskCardComponent,
				TaskHistoryComponent,
				StatusTransformPipe,
				StringTruncatePipe
			]
		})
		.overrideDirective(TaskHistoryComponent, MockTaskHistoryComponent)
		.compileComponents().then(()=> {
			fixture = TestBed.createComponent(TaskCardComponent);
			comp = fixture.componentInstance;
			comp.task = {id: 1, name: 'Task Name', description: 'Task Description', status: Status.Ready, startDate: new Date(), duration: 1, notes: []};

		});
	}));
	
	it('should define the task card component ', () => {
		fixture.detectChanges();

		expect(comp).toBeDefined();
		expect(comp instanceof TaskCardComponent).toBe(true);
	});

	it('should move card to STARTED column on click moveForward once ', () => {
		fixture.detectChanges();

		let el = fixture.debugElement.nativeElement;
		let anchorTags = el.getElementsByTagName("a");
		anchorTags[anchorTags.length -1].click(); // click move forward button

		expect(comp.task.status).toEqual(Status.Inprogress);
	});

	it('should move card to FINISHED column on click moveForward twice ', () => {
		fixture.detectChanges();

		let el = fixture.debugElement.nativeElement;
		let anchorTags = el.getElementsByTagName("a");
		anchorTags[anchorTags.length -1].click(); // click first time
		anchorTags[anchorTags.length -1].click(); // click second time

		expect(comp.task.status).toEqual(Status.Finished);
	});

	it('should move card to READY column on click moveBack once ', () => {
		comp.task.status = Status.Inprogress;

		fixture.detectChanges();

		let el = fixture.debugElement.nativeElement;
		let anchorTags = el.getElementsByTagName("a");
		anchorTags[0].click(); // click move forward button

		expect(comp.task.status).toEqual(Status.Ready);
	});

	it('should move card to STARTED column on click moveBack once ', () => {
		comp.task.status = Status.Finished;

		fixture.detectChanges();

		let el = fixture.debugElement.nativeElement;
		let anchorTags = el.getElementsByTagName("a");
		anchorTags[0].click(); // click move forward button

		expect(comp.task.status).toEqual(Status.Inprogress);
	});
});