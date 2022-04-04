import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/Personaje.interface";


@Injectable()
export class DbzService {
    
    private _personajes: Personaje[] = [{
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

      get personajes(){
        return [...this._personajes];

      }

    constructor(){}

    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }



}