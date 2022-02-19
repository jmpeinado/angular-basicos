import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.innterfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{

  @Input() nuevo: Personaje = ({
    nombre: 'javi',
    poder: 20
  });

  constructor(private bdzService: DbzService) {}
  // Construir evento para transmitir el personaje
  // @Output() onAddPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(): void {
    if (this.nuevo.poder > 0 && this.nuevo.nombre.trim().length > 0) {
      // Se puede igualar el this.nuevo porque estamos seteando al final un objeto nuevo a this.nuevo
      // Sino, si deberiamos crear un objeto para asignarlo y darle las propiedades individuales
      //const nuevoPersonaje: Personaje = {nombre: this.nuevo.nombre, poder: this.nuevo.poder};
      const nuevoPersonaje: Personaje = this.nuevo;
      
      // Se transmite el evento
      //this.onAddPersonaje.emit(nuevoPersonaje);

      this.bdzService.agregarPersonaje(nuevoPersonaje);
      
      this.nuevo = {nombre: '', poder: 0};
    }
  }
}
