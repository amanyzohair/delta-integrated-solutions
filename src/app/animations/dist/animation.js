"use strict";
exports.__esModule = true;
exports.progress = void 0;
var animations_1 = require("@angular/animations");
exports.progress = animations_1.trigger('progress', [
    animations_1.transition(':enter', [animations_1.animate('4s ease-out', animations_1.keyframes([
            animations_1.style({
                offset: 0,
                width: '0%'
            }),
            animations_1.style({
                offset: 1,
                width: '*'
            }),
        ]))])
]);
