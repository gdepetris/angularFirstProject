import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { agregaComponent } from './agregar/agregar.component';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    agregaComponent
  ],
  exports: [
    MainPageComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }