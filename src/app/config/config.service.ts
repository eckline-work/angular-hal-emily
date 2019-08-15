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
  //private baseUrl = 'https://www1.novadev.appservices.thedoctors.com/HALWebAPI/swagger/ui/index#!/HAL/HAL_FilterApplicationLogs';

  constructor(
    private http: HttpClient,
    private adapter: itemAdapter,
    private today: Date,
    private yesterday: Date
  ) {
    today = new Date();
    yesterday = (function(d){ d.setDate(d.getDate()-1); return d})(new Date);
  }

    list(): Observable<Inform[]> {
    const url = `${this.baseUrl}/`;
    return this.http.post(url, {
      "StartDate": this.today,
      "EndDate": this.yesterday,
      "SystemCode": "",
      "ProcessedFlag": "",
      "RowType": "",
      "MaxRows": 20,
      "ProcessTextSearch": "",
      "TraceTextSearch": "",
      "EnvironmentTextSearch": ""
    }).pipe(
      map((data: any[]) => data.map(item => this.adapter.adapt(item)))
    ); //need to fix
  }


  // list(): Observable<Inform[]> {
  //   const url = `${this.baseUrl}/`;
  //   return this.http.get(url).pipe(
  //     map((data: any[]) => data.map(item => this.adapter.adapt(item)))
  //   );
  // }


  /*
    {
      "StartDate": "2019-08-13T17:50:32.364Z",
      "EndDate": "2019-08-15T17:50:32.364Z",
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