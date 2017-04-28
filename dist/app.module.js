"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var app_component_1 = require('./app.component');
var login_form_component_1 = require('./authc/login-form/login-form.component');
var task_board_component_1 = require('./tasks/task-board/task-board.component');
var task_detail_component_1 = require('./tasks/task-detail/task-detail.component');
var task_card_component_1 = require('./tasks/task-card/task-card.component');
var task_form_component_1 = require('./tasks/task-form/task-form.component');
var task_history_component_1 = require('./tasks/task-history/task-history.component');
var status_transform_pipe_1 = require('./pipes/status-trans/status-transform.pipe');
var string_truncate_pipe_1 = require('./pipes/string-truncate/string-truncate.pipe');
var task_service_1 = require('./tasks/task.service');
var app_routing_1 = require('./app.routing');
var authc_routing_module_1 = require('./authc/authc-routing.module');
var task_routing_module_1 = require('./tasks/task-routing.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                authc_routing_module_1.AuthcRoutingModule,
                task_routing_module_1.TaskRoutingModule,
                app_routing_1.AppRoutingModule,
                ng2_bs3_modal_1.Ng2Bs3ModalModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                login_form_component_1.LoginFormComponent,
                task_board_component_1.TaskBoardComponent,
                task_detail_component_1.TaskDetailComponent,
                task_card_component_1.TaskCardComponent,
                task_form_component_1.TaskFormComponent,
                task_history_component_1.TaskHistoryComponent,
                status_transform_pipe_1.StatusTransformPipe,
                string_truncate_pipe_1.StringTruncatePipe,
            ],
            schemas: [
                core_1.CUSTOM_ELEMENTS_SCHEMA
            ],
            providers: [
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
                task_service_1.TaskService,
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
