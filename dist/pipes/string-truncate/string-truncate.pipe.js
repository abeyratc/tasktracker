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
var core_1 = require('@angular/core');
var DEFAULT_START = 0;
var DEAFULT_END = 25;
var StringTruncatePipe = (function () {
    function StringTruncatePipe() {
    }
    StringTruncatePipe.prototype.transform = function (value, args) {
        var strLen = value.length;
        if (strLen <= DEAFULT_END) {
            return value;
        }
        else {
            var start = DEFAULT_START;
            var end = DEAFULT_END;
            var arg1 = void 0;
            var arg2 = void 0;
            if (args && args.length > 0) {
                if (args.length === 1) {
                    start = DEFAULT_START;
                    arg1 = this.toDecimal(args[0]);
                    end = (arg1 > strLen) ? strLen : arg1;
                }
                else {
                    arg1 = this.toDecimal(args[0]);
                    arg2 = this.toDecimal(args[1]);
                    if (this.inRange(arg1, strLen) && this.inRange(arg2, strLen) && arg1 <= arg2) {
                        start = arg1;
                        end = arg2;
                    }
                }
            }
            //console.log("start="+start+" end="+end+" strLen="+strLen)
            return value.slice(start, end) + ' ...';
        }
    };
    StringTruncatePipe.prototype.toDecimal = function (value) {
        return parseInt(value, 10);
    };
    StringTruncatePipe.prototype.inRange = function (arg, bound) {
        return (arg >= 0 && arg < bound);
    };
    StringTruncatePipe = __decorate([
        core_1.Pipe({ name: 'strTruncate' }), 
        __metadata('design:paramtypes', [])
    ], StringTruncatePipe);
    return StringTruncatePipe;
}());
exports.StringTruncatePipe = StringTruncatePipe;

//# sourceMappingURL=string-truncate.pipe.js.map
