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
  private url = 'https://www1.novadev.appservices.thedoctors.com/HALWebAPI/api/hal/filter-application-logs/';

    list() {
      var dte = new Date();
      var dte2 = new Date();
      dte2.setDate(dte2.getDate() - 1);

    return this.http.post(this.url, {
      "StartDate": dte2.toString(),
      "EndDate": dte.toString(),
      "SystemCode": "",
      "ProcessedFlag": "",
      "RowType": "",
      "MaxRows": 20,
      "ProcessTextSearch": "",
      "TraceTextSearch": "",
      "EnvironmentTextSearch": ""
    }).pipe( //Here's where it's going wrong
      map((data: []) => data.map(item => this.adapter.adapt(item))) //I'm not sure how to fix it
    );
  }

  //It seems like post ADDS data to the server, whereas get retrives data from the server.

}