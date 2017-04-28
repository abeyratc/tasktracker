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
var task_service_1 = require('../task.service');
var task_form_component_1 = require('../task-form/task-form.component');
var TaskBoardComponent = (function () {
    function TaskBoardComponent(taskService) {
        this.taskService = taskService;
    }
    TaskBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getTasks()
            .then(function (tasks) { _this.tasks = tasks; });
    };
    TaskBoardComponent.prototype.addATask = function () {
        this.modal.open();
    };
    __decorate([
        core_1.ViewChild(task_form_component_1.TaskFormComponent), 
        __metadata('design:type', task_form_component_1.TaskFormComponent)
    ], TaskBoardComponent.prototype, "modal", void 0);
    TaskBoardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'task-detail',
            templateUrl: 'task-board.component.html',
            styleUrls: ['task-board.component.css']
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], TaskBoardComponent);
    return TaskBoardComponent;
}());
exports.TaskBoardComponent = TaskBoardComponent;

//# sourceMappingURL=task-board.component.js.map
