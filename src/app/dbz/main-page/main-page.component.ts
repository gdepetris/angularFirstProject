import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/Personaje.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje[] = [{
    nombre: 'Goku',
    poder: 18000},
    {
      nombre: 'Vegeta',
      poder: 17500},

    {
      nombre: 'Yamcha',
      poder: 10
    },
    {
      nombre: 'Krilin',
      poder: 1500
    }
    
 

  ]

  nuevo: Personaje = {
    
    nombre: 'Luis',
    poder: 40

  }
  

  agregarNuevoPersonaje( algo: Personaje ){

    this.personajes.push(algo);

  }

}
