import { Pipe, PipeTransform } from '@angular/core';
import {Inform} from '../data';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap';

@Pipe({name: 'itemFilter'})

export class itemFilterPipe implements PipeTransform {

  transform(items: Inform[], PS: string, TS: string, ES: string, Sys: string, Inc: string, PI?: string, TI?: string, EI?: string, FD?: NgbDate, TD?: NgbDate): Inform[] {

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

    if(FD){
      items = items.filter(i => !i.CD.before(FD));
    }

    if(TD){
      items = items.filter(i => !i.CD.after(TD));
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