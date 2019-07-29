import { Pipe, PipeTransform } from '@angular/core';
import {Inform} from './MockData/data';
import {NgbDate, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Pipe({name: 'itemFilter'})

export class itemFilterPipe implements PipeTransform {

  FD: NgbDateStruct = {year: 1999, month: 1, day: 1};
  TD: NgbDateStruct = {year: 1999, month: 1, day: 1};

  transform(items:Inform[], PS:string, TS:string, ES:string, Sys:string, Inc:string, PI:string, TI:string, EI:string, FD:NgbDate, TD:NgbDate):Inform[] {

    if (PI){
      if (PS == "Contains") {
        items = items.filter(i => i.prc.includes(PI));
      }
      else if (PS == "Begins With") {
        items = items.filter(i => i.prc.indexOf(PI) == 0);
      }
      else {
        items = items.filter(i => i.prc.endsWith(PI));
      }
    }

    if (TI){
      if (TS == "Contains") {
        items = items.filter(i => i.trc.includes(TI));
      }
      else if (TS == "Begins With") {
        items = items.filter(i => i.trc.indexOf(TI) == 0);
      }
      else {
        items = items.filter(i => i.trc.endsWith(TI));
      }
    }

    if (EI){
      if (ES == "Contains") {
        items = items.filter(i => i.env.includes(EI));
      }
      else if (ES == "Begins With") {
        items = items.filter(i => i.env.indexOf(EI) == 0);
      }
      else {
        items = items.filter(i => i.env.endsWith(EI));
      }
    }

    if (TD){
      this.TD = {year: TD.year, month: TD.month, day: TD.day}
      items = items.filter(i => !i.CD.after(this.TD));
    }

    if (FD){
      this.FD = {year: FD.year, month: FD.month, day: FD.day}
      items = items.filter(i => !i.CD.before(this.FD));
    }

    if (Sys){
      items = items.filter(i => i.sys == Sys);
    }
    if (Inc){
      items = items.filter(i => i.err == Inc);
    }

    return items;

  }
}