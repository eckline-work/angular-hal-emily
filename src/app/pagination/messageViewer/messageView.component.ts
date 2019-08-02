import {Component, OnInit} from '@angular/core';
import {Inform} from '../MockData/data';
import {MockData} from '../MockData/mock-data';
import {errorType} from '../MockData/type';

@Component({
  selector: 'messageViewer',
  templateUrl: './messageView.component.html',
  styleUrls: [ '../pagination.component.css' ]
})

export class messageViewer {
  @Input() inform: Inform;
}