import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent, ],
  imports:      [ BrowserModule, FormsModule, MatFormFieldModule, MatDatepickerModule ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
