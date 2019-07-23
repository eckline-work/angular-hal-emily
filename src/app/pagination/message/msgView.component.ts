import {Component, OnInit} from '@angular/core';
import {NgbDateStruct, NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {Inform} from '../data';
import {errorType} from '../type';

@Component({
  selector: 'msgView',
  templateUrl: './msgView.component.html'
})

export class msgView {
  view: Inform[];
}