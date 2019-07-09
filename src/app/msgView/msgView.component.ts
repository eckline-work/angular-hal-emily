import {Component} from '@angular/core';
import {Inform} from '../data';

@Component({
  selector: 'msgView',
  templateUrl: './msgView.component.html'
})

export class msgView {
  idPicked: number;
  items: Inform[] = [];

  sys: string;
  msg: string;
  prc: string;
  trc: string;
  env: string;
  CD: string;
  PD: string;

  found: Inform;

  openMsg(id: number) {
    this.idPicked = id;
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
  }

}