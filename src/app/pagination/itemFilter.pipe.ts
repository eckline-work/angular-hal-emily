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

      }
    }

    if (TI){
      if (TS == "Contains") {
        items = items.filter(i => i.trc.includes(TI));
      }
      else if (TS == "Begins With") {
        items = items.filter(i => i.prc.indexOf(TI) == 0);
      }
      else {

      }
    }

    if (EI){
      if (ES == "Contains") {
        items = items.filter(i => i.trc.includes(EI));
      }
      else if (ES == "Begins With") {
        items = items.filter(i => i.prc.indexOf(EI) == 0);
      }
      else {

      }
    }

    if(FD){

    }

    if(TD){

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