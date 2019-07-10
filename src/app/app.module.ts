import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NgbdDatepickerPopup } from './date/datepicker.component';
import { NgbdPagination } from './pagination/pagination.component';
import { itemFilterPipe } from './pagination/itemFilter.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule ],
  declarations: [ AppComponent, NgbdDatepickerPopup, NgbdPagination, itemFilterPipe ],
  exports:      [ AppComponent, NgbdDatepickerPopup, NgbdPagination ],
  bootstrap:    [ AppComponent, NgbdDatepickerPopup, NgbdPagination ]
})
export class AppModule { }
