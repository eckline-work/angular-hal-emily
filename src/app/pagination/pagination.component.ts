import {Component, OnInit} from '@angular/core';
import {Inform} from '../data';
import {MOCK} from '../mock-data';
import {itemFilterPipe} from './itemFilter.pipe';

@Component({
  selector: 'ngbd-pagination',
  templateUrl: './pagination.component.html',
  providers: [ itemFilterPipe ]
})
export class NgbdPagination {
  //message Viewer Code
  idPicked = -7;

  sys: string;
  msg: string;
  prc: string;
  trc: string;
  env: string;
  CD: Date;
  PD: Date;

  found: Inform;

  openMsg(id: number) {
    this.found = this.items.find(function(element) {
      return element.ID == id;
    });

    this.prc = this.found.prc;
    this.trc = this.found.trc;
    this.env = this.found.env;
    this.sys = this.found.sys;
    this.msg = this.found.msg;
    this.CD = this.found.CD;
    this.PD = this.found.PD;
    this.idPicked = id;
  }

  msgClose() {
    this.idPicked = -7;
  }

  //Search and Table Code
  items = MOCK;
  toShow = this.items;

  page = 1;
  pageSize = 26;
  collectionSize = this.toShow.length;
  pageMax = Math.ceil(this.collectionSize / this.pageSize);

  constructor(private filter: itemFilterPipe) {};

  pageSet(LPg: number, PS: string, TS: string, ES: string, Sys: string, Inc: string, FD?: Date, TD?: Date, PI?: string, TI?: string, EI?: string) {
    if (!LPg){
      this.pageSize = 26;
    }
    else {
      this.pageSize = LPg;
    }

    this.toShow = this.applyFilter( PS, TS, ES, Sys, Inc, FD, TD, PI, TI, EI )
    
    this.collectionSize = this.toShow.length;

    this.pageMax = Math.ceil(this.collectionSize / this.pageSize);
      if (this.pageMax == 0) {
        this.pageMax = 1;
      }
      this.page = 1;

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

  applyFilter(PS: string, TS: string, ES: string, Sys: string, Inc: string, FD?: Date, TD?: Date, PI?: string, TI?: string, EI?: string):any {
     return this.filter.transform(this.items, PS, TS, ES, Sys, Inc, FD, TD, PI, TI, EI);
  }

}
