import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.innterfaces';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  personajes: Personaje[] = [];

  nuevo: Personaje = ({
    nombre: '',
    poder: 0
  });

  constructor(private dbzService: DbzService){}

  addPersonaje(personaje: Personaje): void {
    this.personajes.push(personaje);
  }
  
  mostrarListado(): void {
    console.table(this.dbzService.personajes);
  }
  
}
