import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NgbdPagination } from './pagination/pagination.component';
import { itemFilterPipe } from './pagination/itemFilter.pipe';
import { msgViewPipe } from './pagination/msgView.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule, DragDropModule ],
  declarations: [ AppComponent, NgbdPagination, itemFilterPipe, msgViewPipe ],
  exports:      [ AppComponent, NgbdPagination ],
  bootstrap:    [ AppComponent, NgbdPagination ]
})
export class AppModule { }
