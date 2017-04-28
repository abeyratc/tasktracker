import { Routes } from '@angular/router';

import { TaskBoardComponent } from './task-board/task-board.component';
import { TaskFormComponent } from './task-form/task-form.component';

import { AuthGuard } from '../authc/auth-guard.service';

export const TASK_ROUTES: Routes = [
	{
		path: 'taskboard',
		canActivate: [AuthGuard],
		component: TaskBoardComponent
	},
	{
		path: 'newTask',
		component: TaskFormComponent
	},
];