import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NgbdDatepickerPopup } from './datepicker-popup';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule ],
  declarations: [ AppComponent, NgbdDatepickerPopup ],
  exports:      [ AppComponent, NgbdDatepickerPopup ],
  bootstrap:    [ AppComponent, NgbdDatepickerPopup ]
})
export class AppModule { }
