import {Component, OnInit, HostListener} from '@angular/core';
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
  noViewed = 0;

  hold: Inform;

  CloseItem($event){
    this.msgTog($event);
  }

  msgTog(id: number){
    if (this.noViewed == 0) {
      this.msgOpen(id);
    }
    else {
      var opened = this.viewing.findIndex(function(element) {
        return element.ID == id;
      });
      if (opened == -1) {
        this.msgOpen(id);
      }
      else {
        this.msgClose(opened);
      }
    }
    this.noViewed = this.viewing.length;
  }

  msgOpen(id: number){
    this.hold = new Inform;
    this.hold = this.items.find(function(element) {
      return element.ID == id;
    });
    if (!this.hold.eT) {
      this.hold.eT = new errorType;
    }
    this.viewing.push(this.hold);
  }

  msgClose(index: number){
    this.viewing.splice(index, 1);
  }

  allClose(){
    this.viewing.splice(0, this.noViewed)
    this.noViewed = 0;
  }

  //Search and Table Code
  items = MockData;
  toShow = this.items;

  collectionSize = this.toShow.length;

  pageSet(MI: string, PS: string, TS: string, ES: string, Sys: string, Inc: string, PI: string, TI: string, EI: string, c1: NgbDateStruct, c2: NgbDateStruct) {

    this.allClose();
    var testp1 = "";
    var testp2 = "";

    if (c1) {
      testp1 = c1.toString();
    }
    if (c2) {
       testp2 = c2.toString();
    }

    this.toShow = this.applyFilter( MI, PS, TS, ES, Sys, Inc, PI, TI, EI, testp1, testp2 )

    this.collectionSize = this.toShow.length;

    this.array = [];
    this.sum = 20;
    this.appendItems(0, this.sum);
    
  }

  //scroll Code
  array = [];
  sum = 30;
  throttle = 80;
  scrollDistance = 1;

  onScroll() {
    const start = this.sum;
    this.sum += 10;
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
    this.viewing = [];
  }

  applyFilter(MI: string, PS: string, TS: string, ES: string, Sys: string, Inc: string, PI: string, TI: string, EI: string, FD: string, TD: string):any {
     return this.filter.transform(this.items, MI, PS, TS, ES, Sys, Inc, PI, TI, EI, FD, TD);
  }

  //Datefix 2: Fixlectric Boogaloo
  model1: NgbDateStruct;
  model2: NgbDateStruct;

  //Display Help;
  intViewportWidth: number = window.innerWidth;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.intViewportWidth = event.target.innerWidth;
  }
  
  //constructor
  constructor(private filter: itemFilterPipe, private calendar: NgbCalendar) {
    this.appendItems(0, this.sum);
  };

}
