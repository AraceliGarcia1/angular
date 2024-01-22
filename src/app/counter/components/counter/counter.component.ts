import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `<h1>Hola counter</h1>
    <h1>Contador {{counter}}</h1>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="reset()">Reset</button>
    `
})

export class CounterComponent {
    public title:string = 'Primera app de angular';
    public counter:number=10;
  
    public increaseBy(value:number):void{
      this.counter +=value
    }
  
    public reset():void{
      this.counter = 10;
    }

    
}