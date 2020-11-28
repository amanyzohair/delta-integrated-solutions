import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { progress } from '../animations/animation';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
  animations: [progress]
})
export class TextComponent implements OnInit {

  constructor() { }
  ngOnInit(){
    AOS.init();
  }

}
