import { Component, Input, ViewChild } from '@angular/core';
import { Task, Status } from '../task';

import { TaskHistoryComponent } from '../task-history/task-history.component';

@Component({
	moduleId: module.id,
	selector: 'task-card',
	templateUrl: 'task-card.component.html',
	styleUrls: [
		'task-card.component.css',
		'w3.css', 
		'../shared/common.component.css'
	]
})

export class TaskCardComponent {
    @Input()
	task: Task;

	@ViewChild(TaskHistoryComponent)
    modal: TaskHistoryComponent;

	deleteTask(taskId: number): void {
		alert('delete task ' + taskId)
	}

	editTask(task: Task): void {
		this.modal.open();
	}

	taskInfo(taskId: number): void {
		alert('task info ' + taskId)
	}

	moveBack(task: Task): void {
		if(task.status == Status.Inprogress) {
			task.status = Status.Ready;
		} else if(task.status == Status.Finished) {
			task.status = Status.Inprogress;
		}
	}

	moveForward(task: Task): void {
		if(task.status == Status.Ready) {
			task.status = Status.Inprogress;
		} else if(task.status == Status.Inprogress) {
			task.status = Status.Finished;
		}
	}
}