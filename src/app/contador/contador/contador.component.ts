import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html'
    //styleUrls: ['./app.component.css']
})
export class ContadorComponent {
    title: string = 'Contador App';
    numMonos: number = 10;
    base: number = 5;
    acumularMono(base: number) {
        this.numMonos += base;
    }
}