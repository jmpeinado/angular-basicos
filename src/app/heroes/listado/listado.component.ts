import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Hulk', 'SP', 'Mi padre', 'Mi tio', 'Mi perro'];
  // heroeBorrado: string | undefined;
  heroeBorrado: string = '';
  borrarHeroe() {
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
