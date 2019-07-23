import {Component, OnInit} from '@angular/core';
import {NgbDateStruct, NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {Inform} from '../MockData/data';
import {errorType} from '../MockData/type';

import {NgbdPagination} from '../pagination.component';

@Component({
  selector: 'msgView',
  templateUrl: './msgView.component.html',
  providers: [ NgbdPagination ]
})

export class msgView {
  view: Inform;
}