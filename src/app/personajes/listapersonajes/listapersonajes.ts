import { Component, HostBinding } from '@angular/core';
import { Fichapersonaje } from '../fichapersonaje/fichapersonaje';
import { Personaje } from '../../models/personaje.models';
import { Evento } from '../../services/evento';

@Component({
  selector: 'app-listapersonajes',
  imports: [Fichapersonaje],
  templateUrl: './listapersonajes.html',
  styleUrl: './listapersonajes.css'
})


export class Listapersonajes {
  @HostBinding('style.backgroundImage') fondo: string ="";
  ngOnInit():void {
    this.actualizarFondo();

    this.evento.eventoEmitir.subscribe(() => {
      this.actualizarFondo();
    });
  }

  actualizarFondo(){
    this.fondo = `url('${this.evento.eventoCambio('listapersonajes')}')`;
  }

  constructor(private evento:Evento) {

  }

    Personajes:Personaje[]= [
      new Personaje('Ikit Claw', 'Skaven', 3, '/images/personajes/Ikit_Claw.png'),
      new Personaje('Be´lakor', 'Demonio del caos' , 5 , '/images/personajes/BeLakor.png'),
      new Personaje('Kairos Fateweaver', 'Demonio de Tzeentch' , 5 , '/images/personajes/Kairos.png'),
      new Personaje('Golgfag Maneater', 'Ogro' , 4 , '/images/personajes/Golgfag.png'),
      new Personaje('Luthor Harkon', 'Vampiro' , 3 , '/images/personajes/Luthor_Harkon.png'),
    ]
}
    
