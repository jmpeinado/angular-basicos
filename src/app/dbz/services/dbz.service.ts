import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.innterfaces';

@Injectable()
export class DbzService {
    private _personajes: Personaje[] = [{
        nombre: 'Goku',
        poder: 11000
    },{
        nombre: 'Vegeta',
        poder: 11500
    }];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }
    constructor() {}

    agregarPersonaje(personajeNuevo: Personaje): void {
        this._personajes.push(personajeNuevo);
    }
}