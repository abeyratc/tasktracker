"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var http_1 = require('@angular/http');
var testing_2 = require('@angular/http/testing');
var core_1 = require('@angular/core');
var mock_task_1 = require('../mock-task');
var task_board_component_1 = require('./task-board.component');
var task_card_component_1 = require('../task-card/task-card.component');
var task_form_component_1 = require('../task-form/task-form.component');
var task_service_1 = require('../task.service');
var MockTaskCardComponent = (function () {
    function MockTaskCardComponent() {
    }
    MockTaskCardComponent = __decorate([
        core_1.Component({ template: '' }), 
        __metadata('design:paramtypes', [])
    ], MockTaskCardComponent);
    return MockTaskCardComponent;
}());
var MockTaskFormComponent = (function () {
    function MockTaskFormComponent() {
    }
    MockTaskFormComponent = __decorate([
        core_1.Component({ template: '' }), 
        __metadata('design:paramtypes', [])
    ], MockTaskFormComponent);
    return MockTaskFormComponent;
}());
var MockTaskService = (function (_super) {
    __extends(MockTaskService, _super);
    function MockTaskService() {
        _super.apply(this, arguments);
    }
    MockTaskService.prototype.getTasks = function () {
        return Promise.resolve(mock_task_1.TASKS);
    };
    return MockTaskService;
}(task_service_1.TaskService));
var comp;
var fixture;
describe('Task Board Component', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                MockTaskCardComponent,
                MockTaskFormComponent,
                task_board_component_1.TaskBoardComponent,
                task_card_component_1.TaskCardComponent,
                task_form_component_1.TaskFormComponent
            ],
            providers: [
                { provide: task_service_1.TaskService,
                    useClass: MockTaskService
                },
                {
                    provide: http_1.Http, useFactory: function (backend, options) {
                        return new http_1.Http(backend, options);
                    },
                    deps: [testing_2.MockBackend, http_1.BaseRequestOptions]
                },
                testing_2.MockBackend,
                http_1.BaseRequestOptions,
            ]
        })
            .overrideDirective(task_card_component_1.TaskCardComponent, MockTaskCardComponent)
            .overrideDirective(task_form_component_1.TaskFormComponent, MockTaskFormComponent)
            .compileComponents().then(function () {
            fixture = testing_1.TestBed.createComponent(task_board_component_1.TaskBoardComponent);
            comp = fixture.componentInstance;
            comp.ngOnInit();
        });
    }));
    it('should define the task board component ', function () {
        fixture.detectChanges();
        expect(comp).toBeDefined();
        expect(comp instanceof task_board_component_1.TaskBoardComponent).toBe(true);
    });
    it('should populate the correct table headers ', function () {
        fixture.detectChanges();
        var el = fixture.debugElement.nativeElement;
        var tableHeader = el.getElementsByTagName("th");
        expect(tableHeader[0].innerHTML).toMatch('READY');
        expect(tableHeader[1].innerHTML).toMatch('STARTED');
        expect(tableHeader[2].innerHTML).toMatch('FINISHED');
    });
    it('should populate the first card in READY column ', function () {
        fixture.detectChanges();
        var el = fixture.debugElement.nativeElement;
        var tableRows = el.getElementsByTagName("tr");
        var cells = tableRows[1].getElementsByTagName("td");
        expect(cells[0].innerHTML).toContain('task-card');
        expect(cells[1].innerHTML).not.toContain('task-card');
        expect(cells[2].innerHTML).not.toContain('task-card');
    });
    it('should populate second card in the STARTED column ', function () {
        fixture.detectChanges();
        var el = fixture.debugElement.nativeElement;
        var tableRows = el.getElementsByTagName("tr");
        var cells = tableRows[2].getElementsByTagName("td");
        expect(cells[0].innerHTML).not.toContain('task-card');
        expect(cells[1].innerHTML).toContain('task-card');
        expect(cells[2].innerHTML).not.toContain('task-card');
    });
    it('should populate last card in the FINISHED column ', function () {
        fixture.detectChanges();
        var el = fixture.debugElement.nativeElement;
        var tableRows = el.getElementsByTagName("tr");
        var cells = tableRows[4].getElementsByTagName("td");
        expect(cells[0].innerHTML).not.toContain('task-card');
        expect(cells[1].innerHTML).not.toContain('task-card');
        expect(cells[2].innerHTML).toContain('task-card');
    });
});

//# sourceMappingURL=task-board.component.spec.js.map
