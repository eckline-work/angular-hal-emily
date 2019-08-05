import {Component, OnInit} from '@angular/core';
import {Inform} from './MockData/data';
import {MockData} from './MockData/mock-data';
import {errorType} from './MockData/type';
import {NgbDate, NgbDateStruct, NgbDateAdapter, NgbDateNativeAdapter, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

import {itemFilterPipe} from './itemFilter.pipe';
import { messageViewer } from './messageViewer/messageView.component'

@Component({
  selector: 'ngbd-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: [ './pagination.component.css' ],
  providers: [ itemFilterPipe, {provide: NgbDateAdapter, useClass: NgbDateNativeAdapter} ]
})
export class NgbdPagination {

  //Message View Toggle
  viewing: Inform[] = [];

  msgTog(id: number){
    var idOpen: boolean = false;
    for (let s = 0; s < this.viewing.length; s++){
      if(id == this.viewing[s].ID){
        idOpen = true;
        break;
      }
    }
    if (idOpen){
      this.msgClose(id);
    }
    else {
      this.msgOpen(id);
    }
  }

  msgOpen(id: number) {
    var hold = this.items.findIndex(i => i.ID == id);
    this.viewing.push(this.items[hold]);
  }

  msgClose(id: number) {
    this.viewing.filter(i => i.ID != id);
  }

  //Search and Table Code
  items = MockData;
  toShow = this.items;

  collectionSize = this.toShow.length;

  pageSet(PS: string, TS: string, ES: string, Sys: string, Inc: string, PI: string, TI: string, EI: string, c1: NgbDateStruct, c2: NgbDateStruct) {

    this.viewing = [];
    var testp1 = "";
    var testp2 = "";

    if (c1) {
      testp1 = c1.toString();
    }
    if (c2) {
       testp2 = c2.toString();
    }

    this.toShow = this.applyFilter( PS, TS, ES, Sys, Inc, PI, TI, EI, testp1, testp2 )

    this.collectionSize = this.toShow.length;

    this.array = [];
    this.sum = 20;
    this.appendItems(0, this.sum);
    
  }

  //scroll Code
  array = [];
  sum = 20;
  throttle = 100;
  scrollDistance = 1;

  onScroll() {
    console.log('scrolled');
    const start = this.sum;
    this.sum += 20;
    this.appendItems(start, this.sum);
  }

  addItems(startIndex, endIndex, _method) {
    for (let i = startIndex; i < endIndex; ++i) {
      if (this.toShow[i]) {
        this.array[_method](this.toShow[i]);
      }
      else {
        break;
      }
    }
  }
  
  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'push');
  }

  ngOnInit() {
    for (let i = this.items.length; i > 0; i--){
      this.items[this.items.length-i].ID = i;
    }
  }

  applyFilter(PS: string, TS: string, ES: string, Sys: string, Inc: string, PI: string, TI: string, EI: string, FD: string, TD: string):any {
     return this.filter.transform(this.items, PS, TS, ES, Sys, Inc, PI, TI, EI, FD, TD);
  }

  //Datefix 2: Fixlectric Boogaloo
  model1: NgbDateStruct;
  model2: NgbDateStruct;
  
  //constructor
  constructor(private filter: itemFilterPipe, private calendar: NgbCalendar) {
    this.appendItems(0, this.sum);
  };

}
