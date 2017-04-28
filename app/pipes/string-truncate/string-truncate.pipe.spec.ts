import { StringTruncatePipe } from './string-truncate.pipe.js';

describe('string truncate pipe', () => {
	let pipe: StringTruncatePipe;

	beforeEach(() => {
		pipe = new StringTruncatePipe();
	});

	it('string does not truncate for string length < 25 ', () => {
		let result = pipe.transform('testing truncate', []);
		expect(result).toBe('testing truncate');
	});

	it('string truncates correctly for string length > 25 ', () => {
		let result = pipe.transform('testing truncate with more than 25 characters', []);
		expect(result).toBe('testing truncate with mor ...');
	});

	it('string truncates correctly for string length > 25 with 1 arg ', () => {
		let result = pipe.transform('testing truncate with more than 25 characters', ['10']);
		expect(result).toBe('testing tr ...');
	});

	it('string truncates correctly for string length > 25 with 2 args ', () => {
		let result = pipe.transform('testing truncate with more than 25 characters', ['10', '25']);
		expect(result).toBe('uncate with mor ...');
	});

	it('string truncates to default for 1st limit > string length ', () => {
		let result = pipe.transform('testing truncate with more than 25 characters', ['55']);
		expect(result).toBe('testing truncate with more than 25 characters ...');
	});

	it('string truncates to default for string length > 25  and 2nd limit < string length ', () => {
		let result = pipe.transform('testing truncate with more than 25 characters', ['10', '55']);
		expect(result).toBe('testing truncate with mor ...');
	});
});