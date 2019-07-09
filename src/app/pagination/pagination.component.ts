import {Component} from '@angular/core';
import {Inform} from '../data';

@Component({
  selector: 'ngbd-pagination',
  templateUrl: './pagination.component.html'
})
export class NgbdPagination {

  items: Inform[] = [];

  page = 1;
  pageSize = 26;
  collectionSize = this.items.length;
  pageMax = Math.ceil(this.collectionSize / this.pageSize);
  PS:string;
  PI:string;
  TS:string;
  TI:string;
  ES:string;
  EI:string;
  Sys:string;
  Inc:string;
  FD:string;
  TD:string;

  critSet(PS: string, PI: string, TS: string, TI: string, ES: string, EI: string, Sys: string, Inc: string, FD: string, TD: string, LPg: number) {
    //On click
      //set values equal to selections - OK
      //parse through table

    //Set values
      this.PS = PS;
      this.PI = PI;
      this.TS = PS;
      this.TI = PI;
      this.ES = PS;
      this.EI = PI;
      this.Sys = Sys;
      this.Inc = Inc;
      this.FD = FD;
      this.TD = TD;

    //Table Parsing
      //???

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


  //I don't even know how I'll get the message viewer to work.
  //It will definitely need it's own set of functions.
  //I'll code it after I finish the form function.
  //Hopefully they won't take too long to do.

}
