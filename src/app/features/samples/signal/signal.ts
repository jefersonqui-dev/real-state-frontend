import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  template: `<h1>Signal Counter</h1>
    <p>Counter: {{ count() }}</p>
    <button (click)="increment()">Incrementar</button> 
    <p>{{message()}}</p>
    `,
  
})
export class Signal {
  protected count = signal<number>(0);
  protected message = computed(() =>  `has dado ${this.count()} click sobre el boton`);
  constructor(){
      effect(()=>{
        console.log("el contador es: ", this.count());
        console.log("mensaje:", this.message());
      })
  }

  increment() {
    this.count.update(value => value + 1);
    
  }
}
