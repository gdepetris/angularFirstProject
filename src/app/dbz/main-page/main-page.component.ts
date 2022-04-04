import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/Personaje.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nuevo: Personaje = {
    
    nombre: 'Luis',
    poder: 40

  }


}
