import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inform } from '../pagination/MockData/data';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private baseUrl = '';

  constructor(private http: HttpClient) { }

  list(): Observable<Inform[]> {
    const url = `${this.baseUrl}/`;
    return of([]);
  }

}