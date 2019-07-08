import {Component} from '@angular/core';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-datepicker-popup',
  templateUrl: './datepicker.component.html'
})
export class NgbdDatepickerPopup {
  model: NgbDateStruct;
  today = this.calendar.getToday();
  none = this.calendar;

  constructor(private calendar: NgbCalendar) {}
}
