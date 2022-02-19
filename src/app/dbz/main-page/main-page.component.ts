import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.innterfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  // personajes: Personaje[] = [];

  nuevo: Personaje = ({
    nombre: '',
    poder: 0
  });

  // addPersonaje(personaje: Personaje): void {
  //   this.personajes.push(personaje);
  // }
  
}
