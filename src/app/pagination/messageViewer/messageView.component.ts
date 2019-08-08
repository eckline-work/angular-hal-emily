import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Inform} from '../MockData/data';

@Component({
  selector: 'messageViewer',
  templateUrl: './messageView.component.html',
  styleUrls: [ './MV.css' ]
})

export class messageViewer implements OnInit {
  @Input() inform: Inform;
  @Output() closeEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  msgClose(id: number) {
    this.closeEvent.emit(id);
  }

}