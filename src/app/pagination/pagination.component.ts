import {Component, OnInit} from '@angular/core';
import {Inform} from '../data';
import {MOCK} from '../mock-data';

@Component({
  selector: 'ngbd-pagination',
  templateUrl: './pagination.component.html'
})
export class NgbdPagination {
  idPicked = -7;

  sys: string;
  msg: string;
  prc: string;
  trc: string;
  env: string;
  CD: string;
  PD: string;

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

  items = MOCK;
  toShow = this.items;

  page = 1;
  pageSize = 26;
  collectionSize = this.toShow.length;
  pageMax = Math.ceil(this.collectionSize / this.pageSize);

  critSet(LPg: number) {
    //On clicked
      //parse through table
      //display proper items

    //Table Parsing
      

    //Pagi Dispaly
      if (!LPg){
        this.pageSize = 26;
      }
      else {
        this.pageSize = LPg;
      }

      this.pageMax = Math.ceil(this.collectionSize / this.pageSize);
      if (this.pageMax == 0) {
        this.pageMax = 1;
      }
      this.page = 1;

    //Refresh table
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

}
