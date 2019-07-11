import {Component} from '@angular/core';
import {NgbCalendar, NgbDateStruct, NgbDate} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-datepicker-popup',
  templateUrl: './datepicker.component.html'
})
export class NgbdDatepickerPopup {
  model: NgbDateStruct;
  today = this.calendar.getToday();
  none: NgbDate;

  constructor(private calendar: NgbCalendar) {}
}
