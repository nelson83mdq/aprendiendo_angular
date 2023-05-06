import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aprendiendo_angular';
  mostrarListado: boolean;
  constructor(){
    this.mostrarListado = true;
  }

  cambiarVisibilidad(){
    this.mostrarListado = !this.mostrarListado;
    console.log('evento');
  }
}
