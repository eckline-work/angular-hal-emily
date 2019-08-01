import { Pipe, PipeTransform } from '@angular/core';
import {Inform} from './MockData/data';
import {NgbDate, NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Pipe({name: 'itemFilter'})

export class itemFilterPipe implements PipeTransform {

  transform(items: Inform[], PS: string, TS: string, ES: string, Sys: string, Inc: string, PI: string, TI: string, EI: string): Inform[] {

    if (PI){
      if (PS == "Contains") {
        items = items.filter(i => i.ProcessName.includes(PI));
      }
      else if (PS == "Begins With") {
        items = items.filter(i => i.ProcessName.indexOf(PI) == 0);
      }
      else {
        items = items.filter(i => i.ProcessName.endsWith(PI));
      }
    }

    if (TI){
      if (TS == "Contains") {
        items = items.filter(i => i.TraceInfo.includes(TI));
      }
      else if (TS == "Begins With") {
        items = items.filter(i => i.TraceInfo.indexOf(TI) == 0);
      }
      else {
        items = items.filter(i => i.TraceInfo.endsWith(TI));
      }
    }

    if (EI){
      if (ES == "Contains") {
        items = items.filter(i => i.EnvironmentInfo.includes(EI));
      }
      else if (ES == "Begins With") {
        items = items.filter(i => i.EnvironmentInfo.indexOf(EI) == 0);
      }
      else {
        items = items.filter(i => i.EnvironmentInfo.endsWith(EI));
      }
    }

    if (Sys){
      items = items.filter(i => i.SourceSystem == Sys);
    }
    if (Inc){
      items = items.filter(i => i.err == Inc);
    }

    return items;

  }
  
}