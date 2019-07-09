import {Component} from '@angular/core';

@Component({
  selector: 'ngbd-pagination',
  templateUrl: './pagination.component.html'
})
export class NgbdPagination {
  page = 1;
  pageSize = 26;
  collectionSize = 120;
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
      this.page = 1;
  }

  //I don't even know how I'll get the message viewer to work.
  //It will definitely need it's own set of functions.
  //I'll code it after I finish the form function.
  //Hopefully they won't take too long to do.

}
