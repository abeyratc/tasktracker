import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'statusTrans'})
export class StatusTransformPipe implements PipeTransform {
	transform(value: number): string {
		if(value == 0) {
			return 'READY';
		} else if (value == 1) {
			return 'STARTED';
		} else {
			return 'FINISHED';
		}
	} 
}