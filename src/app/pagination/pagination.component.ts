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


  scrollOn: boolean = true;
  page = 1;
  pageSize = 0;
  collectionSize = this.toShow.length;
  pageMax = 1;

  pageSet(LPg: number, PS: string, TS: string, ES: string, Sys: string, Inc: string, PI: string, TI: string, EI: string) {

    this.idPicked = -7;
    this.idPicked2 = -7;

    this.toShow = this.applyFilter( PS, TS, ES, Sys, Inc, PI, TI, EI )

    this.collectionSize = this.toShow.length;

    if (LPg > 0){
      this.pageSize = LPg;

      this.scrollOn = false;

      this.pageMax = Math.ceil(this.collectionSize / this.pageSize);
      if (this.pageMax == 0) {
        this.pageMax = 1;
      }
    }
    else {
      this.scrollOn = true;
      this.pageSize = 0;
      this.pageMax = 1;
    }
    this.page = 1;
    
  }

  //Will need a refresh function that runs every so often so that new items can be loaded

  ngOnInit() {
  }

  applyFilter(PS: string, TS: string, ES: string, Sys: string, Inc: string, PI: string, TI: string, EI: string):any {
     return this.filter.transform(this.items, PS, TS, ES, Sys, Inc, PI, TI, EI);
  }

  //constructor
  constructor(private filter: itemFilterPipe) {};

}
