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

  constructor(
    private http: HttpClient,
    private adapter: itemAdapter
  ) {}

    list(): Observable<Inform[]> {
      var dte = new Date();
      var dte2 = new Date();
      dte2.setDate(dte2.getDate() - 1);

    return this.http.post('https://www1.novadev.appservices.thedoctors.com/HALWebAPI/api/hal/filter-application-logs/', {
      "StartDate": dte2.toString(),
      "EndDate": dte.toString(),
      "SystemCode": "",
      "ProcessedFlag": "",
      "RowType": "",
      "MaxRows": 20,
      "ProcessTextSearch": "",
      "TraceTextSearch": "",
      "EnvironmentTextSearch": ""
    }).pipe(
      map((data: []) => data.map(item => this.adapter.adapt(item)))
    );
  }

}