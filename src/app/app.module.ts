import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgbModule, NgbDate, NgbDateStruct, NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { NgbdPagination } from './pagination/pagination.component';
import { itemFilterPipe } from './pagination/itemFilter.pipe';
import { messageViewer } from './pagination/messageViewer/messageView.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule, DragDropModule, InfiniteScrollModule ],
  declarations: [ AppComponent, NgbdPagination, itemFilterPipe, messageViewer ],
  exports:      [ AppComponent, NgbdPagination ],
  bootstrap:    [ AppComponent, NgbdPagination ]
})
export class AppModule { }
