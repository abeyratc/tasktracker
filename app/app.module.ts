import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { AppComponent }   from './app.component';
import { LoginFormComponent } from './authc/login-form/login-form.component';
import { TaskBoardComponent } from './tasks/task-board/task-board.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { TaskCardComponent } from './tasks/task-card/task-card.component';
import { TaskFormComponent } from './tasks/task-form/task-form.component';
import { TaskHistoryComponent } from './tasks/task-history/task-history.component';

import { StatusTransformPipe } from './pipes/status-trans/status-transform.pipe';
import { StringTruncatePipe } from './pipes/string-truncate/string-truncate.pipe';


import { TaskService } from './tasks/task.service';

import { AppRoutingModule } from './app.routing';
import { AuthcRoutingModule } from './authc/authc-routing.module';
import { TaskRoutingModule } from './tasks/task-routing.module';

@NgModule({
  imports:      [ 
  	BrowserModule,
    FormsModule,
    HttpModule,
    AuthcRoutingModule,
    TaskRoutingModule,
  	AppRoutingModule,
    Ng2Bs3ModalModule,
  ],

  declarations: [ 
  	AppComponent,
    LoginFormComponent,
  	TaskBoardComponent,
  	TaskDetailComponent,
    TaskCardComponent,
    TaskFormComponent,
    TaskHistoryComponent,
    StatusTransformPipe,
    StringTruncatePipe,
  ],

  schemas:     [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    TaskService,
  ],

  bootstrap:    [ AppComponent ]
})

export class AppModule { }
