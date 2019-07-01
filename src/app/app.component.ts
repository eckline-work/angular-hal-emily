import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public show: boolean = false;
  public show2: boolean = false;
  public SIB: any = 'Show Server/Service Information';

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
}

