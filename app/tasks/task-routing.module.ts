import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TASK_ROUTES } from './task-routes'

@NgModule({
  imports: [
    RouterModule.forChild(TASK_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class TaskRoutingModule {}