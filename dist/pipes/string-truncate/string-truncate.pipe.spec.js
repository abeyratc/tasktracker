"use strict";
var string_truncate_pipe_js_1 = require('./string-truncate.pipe.js');
describe('string truncate pipe', function () {
    var pipe;
    beforeEach(function () {
        pipe = new string_truncate_pipe_js_1.StringTruncatePipe();
    });
    it('string does not truncate for string length < 25 ', function () {
        var result = pipe.transform('testing truncate', []);
        expect(result).toBe('testing truncate');
    });
    it('string truncates correctly for string length > 25 ', function () {
        var result = pipe.transform('testing truncate with more than 25 characters', []);
        expect(result).toBe('testing truncate with mor ...');
    });
    it('string truncates correctly for string length > 25 with 1 arg ', function () {
        var result = pipe.transform('testing truncate with more than 25 characters', ['10']);
        expect(result).toBe('testing tr ...');
    });
    it('string truncates correctly for string length > 25 with 2 args ', function () {
        var result = pipe.transform('testing truncate with more than 25 characters', ['10', '25']);
        expect(result).toBe('uncate with mor ...');
    });
    it('string truncates to default for 1st limit > string length ', function () {
        var result = pipe.transform('testing truncate with more than 25 characters', ['55']);
        expect(result).toBe('testing truncate with more than 25 characters ...');
    });
    it('string truncates to default for string length > 25  and 2nd limit < string length ', function () {
        var result = pipe.transform('testing truncate with more than 25 characters', ['10', '55']);
        expect(result).toBe('testing truncate with mor ...');
    });
});

//# sourceMappingURL=string-truncate.pipe.spec.js.map
