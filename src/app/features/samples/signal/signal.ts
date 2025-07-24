import { Component } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  template: `<h1>Signal Counter</h1>
    <p>Counter: {{ count }}</p>
    <button (click)="incrementar()">Incrementar</button> `,
  
})
export class Signal {
  count = 0;

  incrementar() {
    this.count += 1 ;
  }
}
