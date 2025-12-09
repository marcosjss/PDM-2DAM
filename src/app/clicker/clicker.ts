import { Component, HostBinding } from '@angular/core';
import { ClickerService } from '../services/clicker-service';
import { CommonModule } from '@angular/common';
import { Evento } from '../services/evento';

@Component({
  selector: 'app-clicker',
  imports: [ CommonModule],
  templateUrl: './clicker.html',
  styleUrl: './clicker.css'
})
export class Clicker {
    @HostBinding('style.backgroundImage') fondo: string = "";
    @HostBinding('style.color') colorFuente: string = "";
    ngOnInit():void {
      this.actualizarFondo();

      this.evento.eventoEmitir.subscribe(() => {
        this.actualizarFondo();
      });
    }

    actualizarFondo(){
      this.fondo = `url('${this.evento.eventoCambio('default')}')`;
      this.colorFuente = this.evento.eventoColorFuente('default');
    }

    constructor(private evento:Evento, public game: ClickerService) {

  }
}
