import { CommonModule } from '@angular/common';
import { Component, HostBinding, OnInit} from '@angular/core';
import { Evento } from '../services/evento';
import { Chibi } from '../models/chibi.models';

@Component({
  selector: 'app-carrera',
  imports: [CommonModule],
  templateUrl: './carrera.html',
  styleUrl: './carrera.css'
})
export class Carrera implements OnInit{
  @HostBinding('style.backgroundImage') fondo: string ="";
    ngOnInit():void {
      this.actualizarFondo();
      this.iniciarChibis();
  
      this.evento.eventoEmitir.subscribe(() => {
        this.actualizarFondo();
      });
      
      setInterval(() => {
        this.actualizarPosiciones();
      }, 16);
    }
  
    actualizarFondo(){
      this.fondo = `url('${this.evento.eventoCambio('carrera')}')`;
    }

      constructor(private evento:Evento) {

  }

  movChibi = { transform: 'translateX(100px)' };
  posX:number=0;
  posY:number=0;
  velocidadMuñeco: number=0;
  chibis: Chibi[] = [];

  velocidad(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  iniciarChibis(): void {
    this.chibis = [
      { id: 1, clase: 'chibi1', posX: 0, velocidad: this.velocidad(1, 5), transformar: 'translateX(0px)' },
      { id: 2, clase: 'chibi2', posX: 0, velocidad: this.velocidad(2, 6), transformar: 'translateX(0px)' },
      { id: 3, clase: 'chibi3', posX: 0, velocidad: this.velocidad(3, 7), transformar: 'translateX(0px)' },
      { id: 4, clase: 'chibi4', posX: 0, velocidad: this.velocidad(4, 8), transformar: 'translateX(0px)' },
      { id: 5, clase: 'chibi5', posX: 0, velocidad: this.velocidad(5, 9), transformar: 'translateX(0px)' }
    ];
  }

  actualizarPosiciones(): void {
    this.chibis.forEach(chibi => {
      chibi.posX += chibi.velocidad;
      chibi.transformar = `translateX(${chibi.posX}px)`;
      if (chibi.posX > window.innerWidth) {
        chibi.posX = -170;
        chibi.velocidad = this.velocidad(1, 9); 
      }
    });
  }
}
