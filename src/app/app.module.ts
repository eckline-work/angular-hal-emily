import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgbModule, NgbDate, NgbDateStruct, NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { NgbdPagination } from './pagination/pagination.component';
import { itemFilterPipe } from './pagination/itemFilter.pipe';
import { messageViewer } from './pagination/messageViewer/messageView.component';
import { ConfigService } from './config/config.service'

@NgModule({
  imports:      [ BrowserModule, HttpClientModule, FormsModule, NgbModule, DragDropModule, InfiniteScrollModule, FlexLayoutModule ],
  declarations: [ AppComponent, NgbdPagination, itemFilterPipe, messageViewer ],
  exports:      [ AppComponent, NgbdPagination ],
  bootstrap:    [ AppComponent, NgbdPagination ],
  providers: [ConfigService]
})
export class AppModule { }
