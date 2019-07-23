import {Component, OnInit} from '@angular/core';
import {NgbDateStruct, NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {Inform} from '../data';
import {MOCK} from '../mock-data';
import {errorType} from '../type';

import {itemFilterPipe} from './itemFilter.pipe';
import {msgViewPipe} from './msgView.pipe';

@Component({
  selector: 'ngbd-pagination',
  templateUrl: './pagination.component.html',
  providers: [ itemFilterPipe, msgViewPipe ]
})
export class NgbdPagination {

  FD: NgbDateStruct;
  TD: NgbDateStruct;

  //message Viewer Code
  numPicked = 0;
  msgDisp: Inform[];

  msgTog(id: number) {
    this.msgDisp = this.view.transform(this.msgDisp, id, this.items);
  }

  msgClose(id: number) {
    this.msgDisp = this.view.transform(this.msgDisp, id);
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

    this.numPicked = 0;
    this.msgDisp = this.infStat;

    this.refresh;
  }

  //Will need a refresh function that runs every so often so that new items can be
  refresh(){
    //every 2 minutes or when Refresh Table clicked
  }

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
  constructor(private filter: itemFilterPipe, private calendar: NgbCalendar, private view: msgViewPipe, private infStat: Inform[]) {};

}
