import { Pipe, PipeTransform } from '@angular/core';
import {Inform} from './MockData/data';
import {NgbDate, NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Pipe({name: 'itemFilter'})

export class itemFilterPipe implements PipeTransform {

  transform(items: Inform[], PS: string, TS: string, ES: string, Sys: string, Inc: string, PI: string, TI: string, EI: string, FD: string, TD: string): Inform[] {

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

    if (FD != ""){
      var filtered = [];
      var F = new Date(FD);
      for (let i = 0; i < items.length; i++){
        var testday = new Date(items[i].StartDate);
        if (F.getFullYear() < testday.getFullYear()) {
          filtered.push(items[i]);
        }
        else if (F.getFullYear() == testday.getFullYear()) {
          if (F.getMonth() < testday.getMonth()) {
            filtered.push(items[i]);
          }
          else if (F.getMonth() == testday.getMonth()) {
            if (F.getDate() < testday.getDate() || F.getDate() == testday.getDate()) {
              filtered.push(items[i]);
            }
          }
        }
      }
      items = filtered;
    }
    if (TD != ""){
      var filtered = [];
      var T = new Date(TD);
      for (let i = 0; i < items.length; i++){
        var testday = new Date(items[i].StartDate);
        if (T.getFullYear() > testday.getFullYear()) {
          filtered.push(items[i]);
        }
        else if (T.getFullYear() == testday.getFullYear()) {
          if (T.getMonth() > testday.getMonth()) {
            filtered.push(items[i]);
          }
          else if (T.getMonth() == testday.getMonth()) {
            if (T.getDate() > testday.getDate() || T.getDate() == testday.getDate()) {
              filtered.push(items[i]);
            }
          }
        }
      }
      items = filtered;
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