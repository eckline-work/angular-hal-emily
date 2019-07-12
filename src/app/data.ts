import {errorType} from './type';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

export class Inform {
  sys: string;
  msg: string;
  prc: string;
  trc: string;
  env: string;
  CD: NgbDateStruct;
  PD: NgbDateStruct;
  ID: number;
  err: string;
  eT: errorType;
}