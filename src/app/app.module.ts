import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NgbdDatepickerPopup } from './datepicker.component';
import { NgbdPagination } from './pagination.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule ],
  declarations: [ AppComponent, NgbdDatepickerPopup, NgbdPagination ],
  exports:      [ AppComponent, NgbdDatepickerPopup, NgbdPagination ],
  bootstrap:    [ AppComponent, NgbdDatepickerPopup, NgbdPagination ]
})
export class AppModule { }
