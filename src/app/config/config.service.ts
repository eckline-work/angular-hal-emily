import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Inform } from '../pagination/MockData/data';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  items: Inform[] = [];

  addMsgLog(log) {
    this.items.unshift(log);
  }

  getItems() {
    return this.items;
  }

  /*getNewLogs() {
    return this.http.get('');
    //where do the newly logged items go?
  }*/

}