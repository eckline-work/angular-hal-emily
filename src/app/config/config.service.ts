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

  private baseUrl = ''; //need url of the data

  constructor(
    private http: HttpClient,
    private adapter: itemAdapter
  ) { }

  list(): Observable<Inform[]> {
    const url = `${this.baseUrl}/`;
    return this.http.get(url).pipe( //this will get the items once we know where they are
      map((data: any[]) => data.map(item => this.adapter.adapt(item))),
    );
  }

}