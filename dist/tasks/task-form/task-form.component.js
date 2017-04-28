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
var TaskFormComponent = (function () {
    function TaskFormComponent() {
        this.taskType = ['Recurring', 'Non-Recurring'];
    }
    TaskFormComponent.prototype.close = function () {
        this.modal.close();
    };
    TaskFormComponent.prototype.open = function () {
        this.modal.open();
    };
    __decorate([
        core_1.ViewChild(ng2_bs3_modal_1.ModalComponent), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], TaskFormComponent.prototype, "modal", void 0);
    TaskFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'task-form',
            templateUrl: 'task-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TaskFormComponent);
    return TaskFormComponent;
}());
exports.TaskFormComponent = TaskFormComponent;

//# sourceMappingURL=task-form.component.js.map
