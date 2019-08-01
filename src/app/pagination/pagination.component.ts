import {Component, OnInit} from '@angular/core';
import {Inform} from './MockData/data';
import {MockData} from './MockData/mock-data';
import {errorType} from './MockData/type';
import {NgbDate, NgbDateStruct, NgbDateAdapter, NgbDateNativeAdapter, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

import {itemFilterPipe} from './itemFilter.pipe';

@Component({
  selector: 'ngbd-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: [ './pagination.component.css' ],
  providers: [ itemFilterPipe, {provide: NgbDateAdapter, useClass: NgbDateNativeAdapter} ]
})
export class NgbdPagination {

  //Message View Toggle
  idPicked = -7;
  idPicked2 = -7;

  found: Inform;
  found2: Inform;

  clkCt: boolean = false;

  msgTog(id: number){
    if (id == this.idPicked || id == this.idPicked2){
      this.msgClose(id);
    }
    else {
      this.msgOpen(id);
    }
  }

  msgOpen(id: number) {
    if (this.clkCt){
      this.found2 = this.items.find(function(element) {
        return element.ID == id;
      });
      if (!this.found2.eT) {
        this.found2.eT = new errorType;
      }
      this.idPicked2 = id;
    }
    else {
      this.found = this.items.find(function(element) {
        return element.ID == id;
      });
      if (!this.found.eT) {
        this.found.eT = new errorType;
      }
      this.idPicked = id;
    }
    this.clkCt = !this.clkCt;
  }

  msgClose(id: number) {
    if (id == this.idPicked){
      this.idPicked = -7;
      this.clkCt = false;
    }
    else {
      this.idPicked2 = -7;
      this.clkCt = true;
    }
  }

  //Search and Table Code
  items = MockData;
  toShow = this.items;

  collectionSize = this.toShow.length;

  pageSet(PS: string, TS: string, ES: string, Sys: string, Inc: string, PI: string, TI: string, EI: string, c1: NgbDateStruct, c2: NgbDateStruct) {

    this.testp1 = "";
    this.testp2 = "";

    if (c1) {
      this.testp1 = c1.toString();
    }
    if (c2) {
      this.testp2 = c2.toString();
    }

    this.idPicked = -7;
    this.idPicked2 = -7;

    this.toShow = this.applyFilter( PS, TS, ES, Sys, Inc, PI, TI, EI, this.testp1, this.testp2 )

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
  }

  applyFilter(PS: string, TS: string, ES: string, Sys: string, Inc: string, PI: string, TI: string, EI: string, FD: string, TD: string):any {
     return this.filter.transform(this.items, PS, TS, ES, Sys, Inc, PI, TI, EI, FD, TD);
  }

  //Datefix 2: Fixlectric Boogaloo
  model1: NgbDateStruct;
  model2: NgbDateStruct;
  dayhelp1a: Date;
  dayhelp2a: Date;
  testp1: string;
  testp2: string;

  //constructor
  constructor(private filter: itemFilterPipe, private calendar: NgbCalendar) {
    this.appendItems(0, this.sum);
  };

}
