import { Component } from '@angular/core';

import { ModalService } from './modal.service';


@Component({
  selector: 'my-app',
  templateUrl: './sample.component.html',
  styleUrls: ['./app.component.css']
})
export class SampleComponent  {

 
  constructor() { }

  public close() {
    this.ModalService.destroy();
  }
 
}