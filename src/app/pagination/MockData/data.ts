import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { errorType } from './type';

export class Inform {

  SourceSystem: string;
  LogNumber: number;
  Message: string;
  ProcessName: string;
  TraceInfo: string;
  EnvironmentInfo: string;
  StartDate: Date;
  EndDate: Date;
  ID: number;
  err: boolean;
  eT: errorType;
  UserName: string;

  constructor(
    SourceSystem: string,
    LogNumber: number,
    Message: string,
    ProcessName: string,
    TraceInfo: string,
    EnvironmentInfo: string,
    StartDate: Date,
    EndDate: Date,
    ID: number,
    err: boolean,
    eT: errorType,
    UserName: string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class itemAdapter implements Adapter<Inform> {
  adapt(item: any): Inform {
    return new Inform(
      item.SourceSystem,
      item.LogNumber,
      item.Message,
      item.ProcessName,
      item.TraceInfo,
      item.EnvironmentInfo,
      new Date(),
      new Date(),
      0,
      item.err,
      new errorType(item.eT.code, item.eT.desc, item.eT.email, item.eT.pager),
      item.UserName,
    );
  }

  /*
  
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