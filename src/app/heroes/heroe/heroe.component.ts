import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent {
    nombre: string = 'hulk';
    edad: number = 45;
    get nombreCapi(): string {
        return this.nombre.toUpperCase();
    }
    dameDatos(): string{
        return `${this.nombre} - ${this.edad}`;
    }
    cambiarNombre(): void{
        this.nombre = 'Superman';
    }
    cambiarEdad(): void{
        this.edad = 32;
    }
}