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
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var task_1 = require('../task');
var TaskHistoryComponent = (function () {
    function TaskHistoryComponent() {
    }
    TaskHistoryComponent.prototype.open = function () {
        this.note = '';
        this.modal.open();
    };
    TaskHistoryComponent.prototype.cancel = function () {
        this.reset();
        this.modal.dismiss();
    };
    TaskHistoryComponent.prototype.log = function () {
        console.log(this.note);
        this.message = '';
        if (this.note) {
            //TODO: save
            this.modal.close();
            this.note = null;
        }
        else {
            this.message = 'Note is empty. Either cancel or enter a new note.';
        }
    };
    TaskHistoryComponent.prototype.reset = function () {
        this.message = '';
        this.note = '';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', task_1.Task)
    ], TaskHistoryComponent.prototype, "task", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TaskHistoryComponent.prototype, "note", void 0);
    __decorate([
        core_1.ViewChild(ng2_bs3_modal_1.ModalComponent), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], TaskHistoryComponent.prototype, "modal", void 0);
    TaskHistoryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'task-history',
            templateUrl: 'task-history.component.html',
            styleUrls: ['task-history.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TaskHistoryComponent);
    return TaskHistoryComponent;
}());
exports.TaskHistoryComponent = TaskHistoryComponent;

//# sourceMappingURL=task-history.component.js.map
