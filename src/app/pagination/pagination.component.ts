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
  }

}
