import { Component } from "@angular/core";

@Component({

    selector: 'app-heroes',
    templateUrl: './heroes.component.html'

})

export class HeroesComponent {

    nombre: string = 'Ironman';
    edad: number = 45;

    get NombreCapitalizado() {

        return this.nombre.toUpperCase();

    }

    obtenNombre(): string {

        return this.nombre + ', ' + this.edad + ' años.'

    }

    cambiarNombre(): void {

        this.nombre = 'spiderman';

    }

    cambiarEdad(): void {

        this.edad = 23

    }

}