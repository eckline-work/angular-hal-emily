import {errorType} from './type';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap';

export class Inform {
  sys: string;
  msg: string;
  prc: string;
  trc: string;
  env: string;
  CD: NgbDate;
  PD: NgbDate;
  ID: number;
  err: string;
  eT: errorType;
}