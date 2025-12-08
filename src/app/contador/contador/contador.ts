import { CommonModule } from '@angular/common';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Evento } from '../../services/evento';

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
}
