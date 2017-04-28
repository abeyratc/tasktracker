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
var testing_1 = require('@angular/core/testing');
var core_1 = require('@angular/core');
var task_1 = require('../task');
var task_card_component_1 = require('./task-card.component');
var task_history_component_1 = require('../task-history/task-history.component');
var status_transform_pipe_1 = require('../../pipes/status-trans/status-transform.pipe');
var string_truncate_pipe_1 = require('../../pipes/string-truncate/string-truncate.pipe');
var MockTaskHistoryComponent = (function () {
    function MockTaskHistoryComponent() {
    }
    MockTaskHistoryComponent = __decorate([
        core_1.Component({ template: '' }), 
        __metadata('design:paramtypes', [])
    ], MockTaskHistoryComponent);
    return MockTaskHistoryComponent;
}());
var comp;
var fixture;
describe('TaskCardComponent', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                MockTaskHistoryComponent,
                task_card_component_1.TaskCardComponent,
                task_history_component_1.TaskHistoryComponent,
                status_transform_pipe_1.StatusTransformPipe,
                string_truncate_pipe_1.StringTruncatePipe
            ]
        })
            .overrideDirective(task_history_component_1.TaskHistoryComponent, MockTaskHistoryComponent)
            .compileComponents().then(function () {
            fixture = testing_1.TestBed.createComponent(task_card_component_1.TaskCardComponent);
            comp = fixture.componentInstance;
            comp.task = { id: 1, name: 'Task Name', description: 'Task Description', status: task_1.Status.Ready, startDate: new Date(), duration: 1, notes: [] };
        });
    }));
    it('should define the task card component ', function () {
        fixture.detectChanges();
        expect(comp).toBeDefined();
        expect(comp instanceof task_card_component_1.TaskCardComponent).toBe(true);
    });
    it('should move card to STARTED column on click moveForward once ', function () {
        fixture.detectChanges();
        var el = fixture.debugElement.nativeElement;
        var anchorTags = el.getElementsByTagName("a");
        anchorTags[anchorTags.length - 1].click(); // click move forward button
        expect(comp.task.status).toEqual(task_1.Status.Inprogress);
    });
    it('should move card to FINISHED column on click moveForward twice ', function () {
        fixture.detectChanges();
        var el = fixture.debugElement.nativeElement;
        var anchorTags = el.getElementsByTagName("a");
        anchorTags[anchorTags.length - 1].click(); // click first time
        anchorTags[anchorTags.length - 1].click(); // click second time
        expect(comp.task.status).toEqual(task_1.Status.Finished);
    });
    it('should move card to READY column on click moveBack once ', function () {
        comp.task.status = task_1.Status.Inprogress;
        fixture.detectChanges();
        var el = fixture.debugElement.nativeElement;
        var anchorTags = el.getElementsByTagName("a");
        anchorTags[0].click(); // click move forward button
        expect(comp.task.status).toEqual(task_1.Status.Ready);
    });
    it('should move card to STARTED column on click moveBack once ', function () {
        comp.task.status = task_1.Status.Finished;
        fixture.detectChanges();
        var el = fixture.debugElement.nativeElement;
        var anchorTags = el.getElementsByTagName("a");
        anchorTags[0].click(); // click move forward button
        expect(comp.task.status).toEqual(task_1.Status.Inprogress);
    });
});

//# sourceMappingURL=task-card.component.spec.js.map
