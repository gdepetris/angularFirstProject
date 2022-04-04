import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Personaje } from "../interfaces/Personaje.interface";
import { DbzService } from "../services/dbz.service";

@Component({

    selector: 'app-agrega',
    templateUrl: 'agregar.component.html'

})
export class agregaComponent {


  constructor(private dbzService: DbzService){}

    @Input() nuevo: Personaje = {
        nombre:'',
        poder:0

    } 
    
      agregarPersonaje(){
    
        console.log(this.nuevo.nombre + ', ' + this.nuevo.poder + ' unidades de poder.');
        
        this.dbzService.agregarPersonaje(this.nuevo);

        this.nuevo = {
          nombre:'',
          poder: 0
        }
    
      }

}