import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/Personaje.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {


 get personajes(): Personaje[] {
  return this.dbzService.personajes;

 }

  constructor(private dbzService: DbzService){}

}
