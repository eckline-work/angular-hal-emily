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

  private baseUrl = 'https://www1.novadev.appservices.thedoctors.com/HALWebAPI/api/hal/filter-application-logs';

  constructor(
    private http: HttpClient,
    private adapter: itemAdapter
  ) { }

  list(): Observable<Inform[]> {
    const url = `${this.baseUrl}/`;
    return this.http.get(url).pipe(
      map((data: any[]) => data.map(item => this.adapter.adapt(item))),
    ); //need to fix
  }

  /* holding this for now
  {
  "StartDate": "2019-08-13T17:50:32.364Z",
  "EndDate": "2019-08-14T17:50:32.364Z",
  "SystemCode": "",
  "ProcessedFlag": "",
  "RowType": "",
  "MaxRows": 0,
  "ProcessTextSearch": "",
  "TraceTextSearch": "",
  "EnvironmentTextSearch": ""
  }

  https://www1.novadev.appservices.thedoctors.com/HALWebAPI/swagger/ui/index#!/HAL/HAL_FilterApplicationLogs
  */

}