import { animate, style, transition, trigger, keyframes } from "@angular/animations";

export let progress = trigger('progress',[
    transition(':enter',[animate('4s ease-out', keyframes([
        style({
            offset: 0,
            width: '0%'
        }),
        style({
            offset: 1,
            width: '*'
        }),
    ]))])
])