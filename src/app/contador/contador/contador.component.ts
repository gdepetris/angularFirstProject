import { Component } from "@angular/core";

@Component({

    selector: 'app-contador',
    template: `
    
    <h1>{{title}}</h1>

<button (click)="acumular(-1)">-1</button>
<button (click)="acumular(-5)">-5</button>
<button (click)="acumular(-10)">-10</button>

<h3>{{numero}}</h3>

<button (click)="acumular(1)">+1</button>
<button (click)="acumular(5)">+5</button>
<button (click)="acumular(10)">+10</button>
    
    `

})
export class ContadorComponent{

    title: string = 'Contador App';
    numero: number = 0;
  
    acumular( algo: number ) {
  
      this.numero = this.numero + algo;
    }
}