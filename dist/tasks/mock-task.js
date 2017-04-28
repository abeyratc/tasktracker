"use strict";
var task_1 = require('./task');
exports.TASKS = [
    { id: 1, name: 'Kumon', description: 'Fininsh Kumon for the day.', status: task_1.Status.Ready, startDate: new Date(), duration: 1, notes: [] },
    { id: 2, name: 'Reading', description: 'Daily 20 Min. reading.', status: task_1.Status.Inprogress, startDate: new Date(), duration: 1, notes: [] },
    { id: 3, name: 'Piano', description: 'Practice daily piano', status: task_1.Status.Ready, startDate: new Date(), duration: 1, notes: [] },
    { id: 4, name: 'Math', description: 'Extra Math', status: task_1.Status.Finished, startDate: new Date(), duration: 1, notes: [{ entryDate: new Date(), log: 'Work started' }, { entryDate: new Date(), log: 'Added content' }, { entryDate: new Date(), log: 'Work finished' }] }
];

//# sourceMappingURL=mock-task.js.map
