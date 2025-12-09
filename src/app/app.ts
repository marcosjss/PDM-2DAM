import { Component, HostBinding, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Evento } from './services/evento';

@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    @HostBinding('style.backgroundImage') fondo: string ="";
    ngOnInit():void {
      this.actualizarFondo();
  
      this.evento.eventoEmitir.subscribe(() => {
        this.actualizarFondo();
      });
    }
  
    actualizarFondo(){
      this.fondo = `url('${this.evento.eventoCambio('default')}')`;
    }

      constructor(private evento:Evento) {

  }
}
