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
      item.LOG_SYSTEM_CODE,
      item.LOG_NUM,
      item.LOG_MESSAGE,
      item.PROCESS_NAME,
      item.TRACE_INFO + item.TRACE_INFO2,
      item.ENVIRONMENT_INFO + item.ENVIRONMENT_INFO2,
      new Date(item.CREATED_DATE),
      new Date(item.PROCESS_DATE),
      item.APPLICATION_LOG_ID,
      false,
      new errorType(item.eT.code, item.eT.desc, item.eT.email, item.eT.pager),
      item.CREATED_BY,
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