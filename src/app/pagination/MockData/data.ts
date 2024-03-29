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
  UserName: string;
  err: boolean;
  eT: errorType;

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
    UserName: string,
    err?: boolean,
    eT?: errorType,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class itemAdapter implements Adapter<Inform> {
  adapt(item: any): Inform {
    var trace = item.TRACE_INFO + item.TRACE_INFO2;
    var env = item.ENVIRONMENT_INFO + item.ENVIRONMENT_INFO2;
    return new Inform(
      item.LOG_SYSTEM_CODE,
      item.LOG_NUM,
      item.LOG_MESSAGE,
      item.PROCESS_NAME,
      trace,
      env,
      new Date(item.CREATED_DATE),
      new Date(item.PROCESS_DATE),
      item.APPLICATION_LOG_ID,
      item.CREATED_BY,
    );
  }

}