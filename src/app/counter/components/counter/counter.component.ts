import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <p>Counter: {{ counter}}</p>
  <div class="col">
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)"> -1</button>
  </div>

  `
})

export class CounterComponent {
  public title: string = 'Mi primer app de angular';
  public counter: number = 10;

  increaseBy(value:number):void{
    this.counter += value;
  }

  resetCounter(){
    this.counter = 10;
  }
}
