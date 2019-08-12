import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Inform } from '../pagination/MockData/data';

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