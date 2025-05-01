import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template:  `
  <p>Bienvenido JomapeteCode</p>
  <h3>Counter:{{ counter }}</h3>
  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `,
  standalone: false
})

export class CounterComponent  {

  public counter:number = 10;

  increaseBy(num:number):void {
    this.counter += num;
  };

  resetCounter():void {
    this.counter = 10;
  };


}
