import { Pipe, PipeTransform } from '@angular/core';
import {Inform} from '../data';

@Pipe({name: 'msgView'})

export class msgViewPipe implements PipeTransform {

  transform(items: Inform[], view: Inform[], id: number): Inform[] {
    if(view.find(function(element) {return element.ID == id;})){
      this.msgClose(view, id);
    }
    else {
      view.push(items.find(function(element) {return element.ID == id;}));
    }
    return view;
  }

  msgClose(items: Inform[], id: number): Inform[] {
    items = items.filter(i => i.ID != id);
    return items;
  }

}
