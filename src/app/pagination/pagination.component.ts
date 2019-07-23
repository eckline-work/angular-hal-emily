import {Component, OnInit} from '@angular/core';
import {NgbDateStruct, NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {Inform} from '../data';
import {MOCK} from '../mock-data';
import {errorType} from '../type';

import {itemFilterPipe} from './itemFilter.pipe';

@Component({
  selector: 'ngbd-pagination',
  templateUrl: './pagination.component.html',
  providers: [ itemFilterPipe ]
})
export class NgbdPagination {

  FD: NgbDateStruct;
  TD: NgbDateStruct;

  //message Viewer Code
  view: Inform[];
  idList: number[];
  clIdx: number;
  toPush: number;

  msgTog (id: number){
    this.clIdx = this.idList.indexOf(id);
    if(this.clIdx < 0){
      this.idList.push(id);
      this.toPush = this.items.findIndex(i => (i.ID == id));
      this.view.push(this.items[this.toPush]);
    }
    else{
      this.msgClear;
    }
  }

  msgClear (id: number, clIdx?: number){
    if(!clIdx){
      clIdx = this.idList.indexOf(id);
    }
    this.view.splice(clIdx, 1);
    this.idList.splice(clIdx, 1);
  }

  //Search and Table Code
  items = MOCK;
  toShow = this.items;

  page = 1;
  pageSize = 26;
  collectionSize = this.toShow.length;
  pageMax = Math.ceil(this.collectionSize / this.pageSize);

  pageSet(LPg: number, PS: string, TS: string, ES: string, Sys: string, Inc: string, PI: string, TI: string, EI: string) {
    if (!LPg){
      this.pageSize = 26;
    }
    else {
      this.pageSize = LPg;
    }

    this.toShow = this.applyFilter( PS, TS, ES, Sys, Inc, PI, TI, EI, this.FD, this.TD )
    
    this.collectionSize = this.toShow.length;

    this.pageMax = Math.ceil(this.collectionSize / this.pageSize);
      if (this.pageMax == 0) {
        this.pageMax = 1;
      }
      this.page = 1;
  }

  //Will need a refresh function that runs every so often so that new items can be loaded

  ngOnInit() {
    this.pageMax = Math.ceil(this.collectionSize / this.pageSize);
    if (this.pageMax == 0) {
      this.pageMax = 1;
    }
  }

  applyFilter(PS: string, TS: string, ES: string, Sys: string, Inc: string, PI: string, TI: string, EI: string, FD: NgbDateStruct, TD: NgbDateStruct):any {
     return this.filter.transform(this.items, PS, TS, ES, Sys, Inc, PI, TI, EI, FD, TD);
  }

  //Date Fix
    model1: NgbDateStruct;
    model2: NgbDateStruct;
    today = this.calendar.getToday();
    none: NgbDate;

  //constructor
  constructor(private filter: itemFilterPipe, private calendar: NgbCalendar ) {};

}
