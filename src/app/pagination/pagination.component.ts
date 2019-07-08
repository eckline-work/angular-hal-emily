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
    //At least I found a webpage I can use as a reference, I'll begin working through this tomorrow.
  }

  //I don't even know how I'll get the message viewer to work.
  //It will definitely need it's own set of functions.
  //I'll code it after I finish the form function.
  //Hopefully they won't take too long to do.

}
