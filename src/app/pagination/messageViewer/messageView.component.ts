import {Component, OnInit, Input} from '@angular/core';
import {Inform} from '../MockData/data';

@Component({
  selector: 'messageViewer',
  templateUrl: './messageView.component.html',
  styleUrls: [ '../pagination.component.css' ]
})

export class messageViewer implements OnInit {
  @Input() inform: Inform;

  constructor() { }

  ngOnInit() {
  }

}