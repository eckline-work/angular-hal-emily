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
        if (F.getFullYear() < items[i].StartDate.getFullYear()) {
          filtered.push(items[i]);
        }
        else if (F.getFullYear() == items[i].StartDate.getFullYear()) {
          if (F.getMonth() < items[i].StartDate.getMonth()) {
            filtered.push(items[i]);
          }
          else if (F.getMonth() == items[i].StartDate.getMonth()) {
            if (F.getDate() <= items[i].StartDate.getDate()) {
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
        if (T.getFullYear() > items[i].StartDate.getFullYear()) {
          filtered.push(items[i]);
        }
        else if (T.getFullYear() == items[i].StartDate.getFullYear()) {
          if (T.getMonth() > items[i].StartDate.getMonth()) {
            filtered.push(items[i]);
          }
          else if (T.getMonth() == items[i].StartDate.getMonth()) {
            if (T.getDate() >= items[i].StartDate.getDate()) {
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