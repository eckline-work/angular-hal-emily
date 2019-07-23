import {Component, OnInit} from '@angular/core';
import {NgbDateStruct, NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {Inform} from '../MockData/data';
import {errorType} from '../MockData/type';

@Component({
  selector: 'msgView',
  templateUrl: './msgView.component.html'
})

export class msgView {
  view: Inform[];
}