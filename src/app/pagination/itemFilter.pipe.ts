import { Pipe, PipeTransform } from '@angular/core';
import {Inform} from '../data';

@Pipe({name: 'itemFilter'})

export class itemFilterPipe implements PipeTransform {
  transform(items: Inform[]): any {
  }
}