import { Pipe, PipeTransform } from '@angular/core';
import {Inform} from './MockData/data';
import {NgbDate, NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Pipe({name: 'itemFilter'})

export class itemFilterPipe implements PipeTransform {

  transform(items: Inform[], PS: string, TS: string, ES: string, Sys: string, Inc: string, PI: string, TI: string, EI: string, FD: number[], TD: number[], nuIn1: Inform[], nuIn2: Inform[]): Inform[] {

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

    if (TD[0] != 0){
      items = this.before(items, TD, nuIn1);
    }

    if (FD[0] != 0){
      items = this.after(items, FD, nuIn2);
    }

    if (Sys){
      items = items.filter(i => i.sys == Sys);
    }
    if (Inc){
      items = items.filter(i => i.err == Inc);
    }

    return items;

  }

  before (items: Inform[], D: number[], nuIn): Inform[]{
    items.forEach(function(element){
      if (D[0] <= element.CD.year){
        if(D[1] <= element.CD.month){
          if(D[2] <= element.CD.day){
            nuIn.push(element);
          }
        }
      }
    });
    return nuIn;
  }
  after (items: Inform[], D: number[], nuIn): Inform[]{
    items.forEach(function(element){
      if (D[0] >= element.CD.year){
        if(D[1] >= element.CD.month){
          if(D[2] >= element.CD.day){
            nuIn.push(element);
          }
        }
      }
    });
    return this.nuIn;
  }

  constructor( private calendar: NgbCalendar ) {};
}