import {Component, OnInit} from '@angular/core';
import {Inform} from './MockData/data';
import {MockData} from './MockData/mock-data';
import {errorType} from './MockData/type';

import {itemFilterPipe} from './itemFilter.pipe';

@Component({
  selector: 'ngbd-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: [ './pagination.component.css' ],
  providers: [ itemFilterPipe ]
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

  pageSet(PS: string, TS: string, ES: string, Sys: string, Inc: string, PI: string, TI: string, EI: string) {

    this.idPicked = -7;
    this.idPicked2 = -7;

    this.toShow = this.applyFilter( PS, TS, ES, Sys, Inc, PI, TI, EI )

    this.collectionSize = this.toShow.length;
    
  }

  //scroll Code
  array = [];
  sum = 20;
  throttle = 60;
  scrollDistance = 2;

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

  applyFilter(PS: string, TS: string, ES: string, Sys: string, Inc: string, PI: string, TI: string, EI: string):any {
     return this.filter.transform(this.items, PS, TS, ES, Sys, Inc, PI, TI, EI);
  }

  //constructor
  constructor(private filter: itemFilterPipe) {
    this.appendItems(0, this.sum);
  };

}
