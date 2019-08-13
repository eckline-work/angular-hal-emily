import { Pipe, PipeTransform } from '@angular/core';
import {Inform} from './MockData/data';
import {NgbDate, NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Pipe({name: 'itemFilter'})

export class itemFilterPipe implements PipeTransform {
  transform(items: Inform[], MI: string, PS: string, TS: string, ES: string, Sys: string, Inc: string, PI: string, TI: string, EI: string, FD: string, TD: string): Inform[] {

    if (PI){
      if (PS == "Contains") {
        items = items.filter(i => i.ProcessName.toUpperCase().includes(PI.toUpperCase())); //Lies and slander
      }
      else if (PS == "Begins With") {
        items = items.filter(i => i.ProcessName.toUpperCase().indexOf(PI.toUpperCase()) == 0); //this exists on the type
      }
      else {
        items = items.filter(i => i.ProcessName.toUpperCase().endsWith(PI.toUpperCase()));
      }
    }
    if (TI){
      if (TS == "Contains") {
        items = items.filter(i => i.TraceInfo.toUpperCase().includes(TI.toUpperCase()));
      }
      else if (TS == "Begins With") {
        items = items.filter(i => i.TraceInfo.toUpperCase().indexOf(TI.toUpperCase()) == 0);
      }
      else {
        items = items.filter(i => i.TraceInfo.toUpperCase().endsWith(TI.toUpperCase()));
      }
    }
    if (EI){
      if (ES == "Contains") {
        items = items.filter(i => i.EnvironmentInfo.toUpperCase().includes(EI.toUpperCase()));
      }
      else if (ES == "Begins With") {
        items = items.filter(i => i.EnvironmentInfo.toUpperCase().indexOf(EI.toUpperCase()) == 0);
      }
      else {
        items = items.filter(i => i.EnvironmentInfo.toUpperCase().endsWith(EI.toUpperCase()));
      }
    }

    if (MI){
      items = items.filter(i => i.Message.toUpperCase().includes(MI.toUpperCase()));
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

    if (Inc == "Y"){
      items = items.filter(i => i.err == true);
    }
    else if (Inc == "N"){
      items = items.filter(i => i.err == false);
    }

    return items;

  } 
}