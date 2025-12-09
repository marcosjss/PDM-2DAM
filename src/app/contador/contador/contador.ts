import { CommonModule } from '@angular/common';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Evento } from '../../services/evento';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-contador',
  imports: [CommonModule],
  templateUrl: './contador.html',
  styleUrl: './contador.css'
})
export class Contador implements OnInit{
  @HostBinding('style.backgroundImage') fondo: string ="";
    @HostBinding('style.color') colorFuente: string = "";
    ngOnInit():void {
      this.actualizarFondo();
      this.automatico();

      this.evento.eventoEmitir.subscribe(() => {
        this.actualizarFondo();
      });
    }

    actualizarFondo(){
      this.fondo = `url('${this.evento.eventoCambio('default')}')`;
      this.colorFuente = this.evento.eventoColorFuente('default');
    }

    constructor(private evento:Evento) {

  }
  
  numero:number = 10;
  private intervalo: Subscription | undefined;

  incrementar(){
    if(this.numero<10){
      this.numero++;
    }else{
      this.numero=10;
    }

  }

  decrementar(){
    if(this.numero>0){
      this.numero--;
    } else {
      this.numero=0;
    }
  }

  resetear(){
    this.numero=10;
  }

  automatico(){
    this.intervalo = interval(1500).subscribe(() => {
      if (this.numero <= 0) {
        this.resetear();
      } else {
        this.decrementar();
      }
    });
  }
}
