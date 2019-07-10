import { Pipe, PipeTransform } from '@angular/core';
import {Inform} from '../data';

@Pipe({name: 'itemFilter'})

export class itemFilterPipe implements PipeTransform {

  transform(items: Inform[], sys: string, inc: string): Inform[] {

    if (sys != ""){
      items = items.filter(item => item.sys == sys);
    }
    if (inc != ""){
      items = items.filter(item => item.sys == inc);
    }

    return items;

  }
}