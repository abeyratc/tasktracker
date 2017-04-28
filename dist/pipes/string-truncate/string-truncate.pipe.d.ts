import { PipeTransform } from '@angular/core';
export declare class StringTruncatePipe implements PipeTransform {
    transform(value: string, args: string[]): string;
    private toDecimal(value);
    private inRange(arg, bound);
}
