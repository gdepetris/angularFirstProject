import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Dr. Strange'];
  heroeBorrado: string[] = [];

  borrarHeroe(): void {

    let heroeBorrado = this.heroes.splice(2,1);

    this.heroeBorrado = heroeBorrado;

    console.log(heroeBorrado);

  }

}
