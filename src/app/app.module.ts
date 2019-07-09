import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NgbdDatepickerPopup } from './date/datepicker.component';
import { NgbdPagination } from './pagination/pagination.component';
import { msgView } from './msgView/msgView.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule ],
  declarations: [ AppComponent, NgbdDatepickerPopup, NgbdPagination, msgView ],
  exports:      [ AppComponent, NgbdDatepickerPopup, NgbdPagination, msgView ],
  bootstrap:    [ AppComponent, NgbdDatepickerPopup, NgbdPagination, msgView ]
})
export class AppModule { }
