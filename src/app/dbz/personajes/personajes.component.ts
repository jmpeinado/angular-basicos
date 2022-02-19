import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.innterfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  //@Input() personajes:Personaje[] = [];
  get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService) {}

  mostrarListado(): void {
    console.table(this.dbzService.personajes);
  }
}
