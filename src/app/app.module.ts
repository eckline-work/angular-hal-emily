import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports:      [ BrowserModule, FormsModule ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
