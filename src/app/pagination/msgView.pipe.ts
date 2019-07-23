import { Pipe, PipeTransform } from '@angular/core';
import {Inform} from '../data';

@Pipe({name: 'msgView'})

export class msgViewPipe implements PipeTransform {

  transform(view: Inform[], id: number, items?: Inform[]): Inform[] {
    if(items){
      if(view.find(function(element) {return element.ID == id;})){
        view = view.filter(i => i.ID != id);
      }
      else {
        view.push(items.find(function(element) {return element.ID == id;}));
      }
    }
    else{
      view = view.filter(i => i.ID != id);
    }
    return view;
  }

}
