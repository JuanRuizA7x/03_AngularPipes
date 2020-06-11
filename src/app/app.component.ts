import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = 'Juan';
  nombre2 = 'juAN ánGEl ruÍz gil';
  arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  porcentaje = 0.234;
  salario = 1234.5;

  heroe = {
    nombre: 'Logan',
    nombreClave: 'Wolverine',
    edad: 500,

    direccion: {
      calle: 'Primera',
      casa: '20'
    }
  };

  valorDePromesa = new Promise (( resolve, reject ) => {
    setTimeout( () => resolve('Llegó la data'), 3500);
  });

  fecha = new Date();
  video = 'uZe_qgMbcsY';
  activar = false;

}
