import {Component, OnInit} from '@angular/core';
import {NgbDateStruct, NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {Inform} from './MockData/data';
import {MOCK} from './MockData/mock-data';
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
  items = MOCK;
  toShow = this.items;


  scrollOn: boolean = true;
  page = 1;
  pageSize = 0;
  collectionSize = this.toShow.length;
  pageMax = 1;

  disp: string;
  disp2: string;
  FD: NgbDate;
  TD: NgbDate;

  pageSet(LPg: number, PS: string, TS: string, ES: string, Sys: string, Inc: string, PI: string, TI: string, EI: string, M1: string, M2: string,) {

    this.idPicked = -7;
    this.idPicked2 = -7;

    this.disp = this.DateFix1(this.disp, M1);
    this.disp2 = this.DateFix1(this.disp2, M2);
    if (this.disp != "//" && this.disp != null){
      this.FD = this.parse(this.disp);
    }
    if (this.disp2 == "//" && this.disp2 != null){
      this.TD = this.parse(this.disp2);
    }

    this.toShow = this.applyFilter( PS, TS, ES, Sys, Inc, PI, TI, EI, this.FD, this.TD )
    
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

  applyFilter(PS: string, TS: string, ES: string, Sys: string, Inc: string, PI: string, TI: string, EI: string, F: NgbDate, T: NgbDate):any {
     return this.filter.transform(this.items, PS, TS, ES, Sys, Inc, PI, TI, EI, F, T);
  }

  //Date Fix
    model1: NgbDateStruct;
    model2: NgbDateStruct;
    today = this.calendar.getToday();

    none: NgbDateStruct;

    DateFix1 (disp: string, M1: string): string {
      disp = M1.charAt(11) + M1.charAt(12) + M1.charAt(13) + M1.charAt(14) + '/' + M1.charAt(27);
      if (M1.charAt(28) != ",") {
        disp = disp + M1.charAt(28) + '/' + M1.charAt(39);
        if (M1.charAt(40) !="}"){
          disp = disp + M1.charAt(40)
        }
      }
      else {
        disp = disp + '/' + M1.charAt(38);
        if (M1.charAt(39) !="}"){
          disp = disp + M1.charAt(39)
        }
      }
      return disp;
    }

    parse(value: any): NgbDate | null {
    if ((typeof value == 'string') && (value.indexOf('/') > -1)) {
      const str = value.split('/');

      const year = Number(str[2]);
      const month = Number(str[1]) - 1;
      const date = Number(str[0]);
      
      return new NgbDate(year, month, date);
    }
    else {
      return null;
    }
  }

  //constructor
  constructor(private filter: itemFilterPipe, private calendar: NgbCalendar ) {};

}
