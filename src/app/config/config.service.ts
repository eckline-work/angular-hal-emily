


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inform, itemAdapter } from '../pagination/MockData/data';
import { errorType } from '../pagination/MockData/type';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private baseUrl = ''; //need url of the data, and what things are called

  constructor(
    private http: HttpClient,
    private adapter: itemAdapter
  ) { }

  list(): Observable<Inform[]> {
    const url = `${this.baseUrl}/`;
    return this.http.get(url).pipe(
      map((data: any[]) => data.map(item => this.adapter.adapt(item))),
    );
  }

}