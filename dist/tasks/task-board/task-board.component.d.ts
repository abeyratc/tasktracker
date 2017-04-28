import { OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { TaskFormComponent } from '../task-form/task-form.component';
export declare class TaskBoardComponent implements OnInit {
    private taskService;
    tasks: Task[];
    modal: TaskFormComponent;
    constructor(taskService: TaskService);
    ngOnInit(): void;
    addATask(): void;
}
