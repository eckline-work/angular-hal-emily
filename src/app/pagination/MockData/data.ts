import {errorType} from './type';

export class Inform {
  SystemCode: string;
  msg: string;
  ProcessTextSearch: string;
  TraceTextSearch: string;
  EnvironmentTextSearch: string;
  StartDate: Date;
  EndDate: Date;
  ID: number;
  err: string;
  eT: errorType;
}