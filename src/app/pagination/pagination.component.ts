import {Component, OnInit} from '@angular/core';
import {Inform} from '../data';

@Component({
  selector: 'ngbd-pagination',
  templateUrl: './pagination.component.html'
})
export class NgbdPagination {

  items: Inform[] = [];
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
