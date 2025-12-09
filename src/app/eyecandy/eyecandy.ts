import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { Evento } from '../services/evento';
import { Guisante } from '../models/eyecandy.models';

@Component({
  selector: 'app-eyecandy',
  imports: [CommonModule],
  templateUrl: './eyecandy.html',
  styleUrl: './eyecandy.css'
})
export class Eyecandy {
  @HostBinding('style.backgroundImage') fondo: string ="";
  @HostBinding('style.color') colorFuente: string = "";
  ngOnInit():void {
      this.actualizarFondo();

      this.evento.eventoEmitir.subscribe(() => {
        this.actualizarFondo();
      });
    }

    actualizarFondo(){
      this.fondo = `url('${this.evento.eventoCambio('eyecandy')}')`;
      this.colorFuente = this.evento.eventoColorFuente('default');
    }

    constructor(private evento:Evento) {

  }

  guisantes: Guisante[] = [];
  siguienteGuisante: number = 0;
  zombieMuerto: boolean = false;
  vidaZombie: number = 20;

  disparar(): void {
    if (this.zombieMuerto == true) {
      return;
  }

  const nuevo: Guisante = {
    id: this.siguienteGuisante++,
    posicion: 100, 
    dispara: true
  };

  this.guisantes.push(nuevo);
    setTimeout(() => {
      this.guisantes = this.guisantes.filter(p => p.id !== nuevo.id);
      this.daño();
    }, 1000);
  }

  daño(): void {
    if (this.zombieMuerto) {
      return;
    }

    this.vidaZombie--; 

    if (this.vidaZombie <= 0) {
      this.vidaZombie = 0;
      this.zombieMuerto = true;
    }
  }

  animacionDisparar(guisante: Guisante): string {
    return guisante.dispara ? 'guisante animacion-disparar' : 'guisante';
  }

}