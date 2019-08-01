import {errorType} from './type';

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
  err: string;
  eT: errorType;
}