import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';


import { AppComponent } from './app.component';
import { SampleComponent} from './sample-component'

@NgModule({
  imports:      [ BrowserModule, FormsModule, ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })],
  declarations: [ AppComponent ],
  entryComponents:[ SampleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
