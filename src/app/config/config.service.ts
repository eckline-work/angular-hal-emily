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

  //private baseUrl = 'https://www1.novadev.appservices.thedoctors.com/HALWebAPI/api/hal/filter-application-logs';
  private baseUrl = 'https://www1.novadev.appservices.thedoctors.com/HALWebAPI/swagger/ui/index#!/HAL/HAL_FilterApplicationLogs';

  constructor(
    private http: HttpClient,
    private adapter: itemAdapter
  ) { }

  /*
    list(): Observable<any[]> {
    const url = `${this.baseUrl}/`;
    return this.http.post(url, {
      "APPLICATION_LOG_ID": new Number,
      "LOG_NUM": new Number,
      "LOG_SYSTEM_CODE": "",
      "PROCESS_NAME": "",
      "LOG_MESSAGE": "",
      "TRACE_INFO": "",
      "TRACE_INFO2": "",
      "ENVIRONMENT_INFO": "",
      "ENVIRONMENT_INFO2": "",
      "PROCESS_DATE": new Date,
      "LOG_NUMBER_DESC": "",
      "LOG_SYSTEM_DESC": "",
      "CREATED_BY": "",
      "CREATED_DATE": new Date,
      "LAST_UPDATED_BY": "",
      "LAST_UPDATED_DATE": new Date
    }).pipe(
      map((data: any[]) => data.map(item => this.adapter.adapt(item)))
    ); //need to fix
  }*/


  list(): Observable<any[]> {
    const url = `${this.baseUrl}/`;
    return this.http.get(url).pipe(
      map((data: any[]) => data.map(item => item))
    );
  }


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