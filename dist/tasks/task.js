"use strict";
var Task = (function () {
    function Task() {
    }
    return Task;
}());
exports.Task = Task;
(function (Status) {
    Status[Status["Ready"] = 0] = "Ready";
    Status[Status["Inprogress"] = 1] = "Inprogress";
    Status[Status["Finished"] = 2] = "Finished";
})(exports.Status || (exports.Status = {}));
var Status = exports.Status;
var Note = (function () {
    function Note() {
    }
    return Note;
}());
exports.Note = Note;

//# sourceMappingURL=task.js.map
