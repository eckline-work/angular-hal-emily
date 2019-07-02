import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public showMain: boolean = true;
  public showStA: boolean = false;
  public showLNtA: boolean = false;
  public showAct: boolean = false;
  public showSev: boolean = false;
  public showSS: boolean = false;
  public showLN: boolean = false;
  public showDL: boolean = false;
  public show: boolean = false;
  public show2: boolean = false;
  public SIB: any = 'Show Server/Service Information';
  public Title: any = 'HAL';

  ngOnInit() { }

  toggle() {
    this.show = !this.show;
    if (this.show) {
      this.SIB = 'Hide Server/Service Information';
    }
    else {
      this.SIB = 'Show Server/Service Information';
    }
  }

  toggle2() {
    this.show2 = !this.show2;
  }

  toMain() {
    this.showMain = true;
    this.showStA, this.showLNtA, this. showAct, this. showSev, this. showSS, this. showLN, this. showDL, this. show, this. show2 = false;
    this. SIB = 'Show Server/Service Information';
    this.Title = 'HAL';
  }

  toStA() {
    this.showStA = true;
    this.showMain = false;
    this.showLNtA = false;
    this. showAct = false;
    this. showSev = false;
    this. showSS = false;
    this. showLN = false;
    this. showDL = false;
    this. show = false;
    this. show2 = false;
    this. SIB = 'Show Server/Service Information';
    this.Title = 'Severities Actions';
  }

  toLNtA() {
    this.showLNtA = true;
    this.showMain = false;
    this.showStA = false;
    this. showAct = false;
    this. showSev = false;
    this. showSS = false;
    this. showLN = false;
    this. showDL = false;
    this. show = false;
    this. show2 = false;
    this. SIB = 'Show Server/Service Information';
    this.Title = 'Numbers Severities';
  }

  toAct() {
    this.showAct = true;
    this.showMain = false;
    this.showStA = false;
    this.showLNtA = false;
    this. showSev = false;
    this. showSS = false;
    this. showLN = false;
    this. showDL = false;
    this. show = false;
    this. show2 = false;
    this. SIB = 'Show Server/Service Information';
    this.Title = 'Actions Definitions';
  }

  toSev() {
    this.showSev = true;
    this.showMain = false;
    this.showStA = false;
    this.showLNtA = false;
    this. showAct = false;
    this. showSS = false;
    this. showLN = false;
    this. showDL = false;
    this. show = false;
    this. show2 = false;
    this. SIB = 'Show Server/Service Information';
    this.Title = 'Severities by Source System';
  }

  toSS() {
    this.showSS = true;
    this.showMain = false;
    this.showStA = false;
    this.showLNtA = false;
    this. showAct = false;
    this. showSev = false;
    this. showLN = false;
    this. showDL = false;
    this. show = false;
    this. show2 = false;
    this. SIB = 'Show Server/Service Information';
    this.Title = 'Source System Definitions';
  }

  toLN() {
    this.showLN = true;
    this.showMain = false;
    this.showStA = false;
    this.showLNtA = false;
    this. showAct = false;
    this. showSev = false;
    this. showSS = false;
    this. showDL = false;
    this. show = false;
    this. show2 = false;
    this. SIB = 'Show Server/Service Information';
    this.Title = 'Log Numbers by Source Systems';
  }

  toDL() {
    this.showDL = true;
    this.showMain = false;
    this.showStA = false;
    this.showLNtA = false;
    this. showAct = false;
    this. showSev = false;
    this. showSS = false;
    this. showLN = false;
    this. show = false;
    this. show2 = false;
    this. SIB = 'Show Server/Service Information';
    this.Title = 'HAL Diagram - Logs grouped per day';
  }
}

