import { Component, OnInit, ViewChild } from '@angular/core';

import { Task } from '../task';
import { TaskService } from '../task.service';

import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
	moduleId: module.id,
	selector: 'task-detail',
	templateUrl: 'task-board.component.html',
  	styleUrls: ['task-board.component.css']
})

export class TaskBoardComponent implements OnInit {
	tasks: Task[];

	@ViewChild(TaskFormComponent)
    modal: TaskFormComponent;

	constructor(private taskService: TaskService) {}

	ngOnInit(): void {
		this.taskService.getTasks()
			.then((tasks) => {this.tasks = tasks;});
	}

	addATask(): void {
		this.modal.open();
	}
}