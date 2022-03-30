import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Personaje } from "../interfaces/Personaje.interface";

@Component({

    selector: 'app-agrega',
    templateUrl: 'agregar.component.html'

})
export class agregaComponent {


    @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

    @Input() nuevo: Personaje = {
        nombre:'',
        poder:0

    } 
    
      agregarPersonaje(){
    
        console.log(this.nuevo.nombre + ', ' + this.nuevo.poder + ' unidades de poder.');
        
        this.onNuevoPersonaje.emit(this.nuevo);
    
        this.nuevo = {
          nombre:'',
          poder: 0
        }
    
      }

}