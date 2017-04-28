import { Pipe, PipeTransform } from '@angular/core';

const DEFAULT_START = 0;
const DEAFULT_END = 25;

@Pipe({name: 'strTruncate'})
export class StringTruncatePipe implements PipeTransform {
	transform(value: string, args: string[]): string {
		let strLen = value.length;
		if(strLen <= DEAFULT_END) {
			return value;
		} else {
			let start = DEFAULT_START;
			let end = DEAFULT_END;
			let arg1:any;
			let arg2:any;
			if(args && args.length > 0) {
				if (args.length === 1) {
					start = DEFAULT_START;
					arg1 = this.toDecimal(args[0]);
					end = (arg1 > strLen) ? strLen : arg1;
				} else {
					arg1 = this.toDecimal(args[0]);
					arg2 = this.toDecimal(args[1]);
					if(this.inRange(arg1, strLen) && this.inRange(arg2, strLen) && arg1 <= arg2) {
						start = arg1;
						end = arg2;
					}
				}
			}
			//console.log("start="+start+" end="+end+" strLen="+strLen)
			return value.slice(start, end) + ' ...'
		}
	}

	private toDecimal(value: string) {
		return parseInt(value, 10);
	}

	private inRange(arg: number, bound: number): boolean {
		return (arg >= 0 && arg < bound);
	}
}