import { CommonModule } from '@angular/common';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Evento } from '../services/evento';

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
  
      this.evento.eventoEmitir.subscribe(() => {
        this.actualizarFondo();
      });
    }
  
    actualizarFondo(){
      this.fondo = `url('${this.evento.eventoCambio('default')}')`;
    }

      constructor(private evento:Evento) {

  }

  movChibi1 = { transform: 'translateX(100px)' };
  posX:number=0;
  posY:number=0;

  async moverse(){

    this.posX += Math.floor(Math.random() * 50)-25; 
    this.posY += Math.floor(Math.random() * 50)-25; 

    this.movChibi1 = { transform: 'translateX('+this.posX+'px) translateY('+this.posX+'px)' };

  }
}

