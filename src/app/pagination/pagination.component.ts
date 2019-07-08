import {Component} from '@angular/core';

@Component({
  selector: 'ngbd-pagination',
  templateUrl: './pagination.component.html'
})
export class NgbdPagination {
  page = 1;
  pageSize = 26;
  refTime = 30;

  critSet() {
    //figuring out how to code this part is driving me insane.
    //On click, should set values equal to selections, then use said values to parse through the table.
  }

  //I don't even know how I'll get the message viewer to work...

}
