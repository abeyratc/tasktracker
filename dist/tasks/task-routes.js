"use strict";
var task_board_component_1 = require('./task-board/task-board.component');
var task_form_component_1 = require('./task-form/task-form.component');
var auth_guard_service_1 = require('../authc/auth-guard.service');
exports.TASK_ROUTES = [
    {
        path: 'taskboard',
        canActivate: [auth_guard_service_1.AuthGuard],
        component: task_board_component_1.TaskBoardComponent
    },
    {
        path: 'newTask',
        component: task_form_component_1.TaskFormComponent
    },
];

//# sourceMappingURL=task-routes.js.map
