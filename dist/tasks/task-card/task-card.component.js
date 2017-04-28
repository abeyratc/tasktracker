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
var task_1 = require('../task');
var task_history_component_1 = require('../task-history/task-history.component');
var TaskCardComponent = (function () {
    function TaskCardComponent() {
    }
    TaskCardComponent.prototype.deleteTask = function (taskId) {
        alert('delete task ' + taskId);
    };
    TaskCardComponent.prototype.editTask = function (task) {
        this.modal.open();
    };
    TaskCardComponent.prototype.taskInfo = function (taskId) {
        alert('task info ' + taskId);
    };
    TaskCardComponent.prototype.moveBack = function (task) {
        if (task.status == task_1.Status.Inprogress) {
            task.status = task_1.Status.Ready;
        }
        else if (task.status == task_1.Status.Finished) {
            task.status = task_1.Status.Inprogress;
        }
    };
    TaskCardComponent.prototype.moveForward = function (task) {
        if (task.status == task_1.Status.Ready) {
            task.status = task_1.Status.Inprogress;
        }
        else if (task.status == task_1.Status.Inprogress) {
            task.status = task_1.Status.Finished;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', task_1.Task)
    ], TaskCardComponent.prototype, "task", void 0);
    __decorate([
        core_1.ViewChild(task_history_component_1.TaskHistoryComponent), 
        __metadata('design:type', task_history_component_1.TaskHistoryComponent)
    ], TaskCardComponent.prototype, "modal", void 0);
    TaskCardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'task-card',
            templateUrl: 'task-card.component.html',
            styleUrls: [
                'task-card.component.css',
                'w3.css',
                '../shared/common.component.css'
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TaskCardComponent);
    return TaskCardComponent;
}());
exports.TaskCardComponent = TaskCardComponent;

//# sourceMappingURL=task-card.component.js.map
