import { EventEmitter, Injectable } from '@angular/core';
import { LocalStorage } from './local-storage';

@Injectable({
  providedIn: 'root'
})
export class Evento {

  halloween:boolean = false;
  navidad:boolean = false;

  eventoEmitir = new EventEmitter<boolean>();

  constructor(private almacenamiento: LocalStorage) {
    this.halloween = this.almacenamiento.isEventActive('halloween');
    this.navidad = this.almacenamiento.isEventActive('navidad');
  }

  cambiarHalloween(esHalloween:boolean) {
    this.halloween = esHalloween;
    this.almacenamiento.setEventState('halloween', esHalloween ? 'on' : 'off');
      if (esHalloween) {
        this.cambiarNavidad(false);
      }
    this.eventoEmitir.emit(this.halloween);
  }

  cambiarNavidad(esNavidad:boolean) {
    this.navidad = esNavidad;
    this.almacenamiento.setEventState('navidad', esNavidad ? 'on' : 'off');
      if (esNavidad) {
        this.cambiarHalloween(false); 
      } 
    this.eventoEmitir.emit(this.navidad);
  }

  eventoCambio (comp:string): string {
    let fondoNormal = "";
    let fondoHalloween = "";
    let fondoNavidad ="";
    
  switch (comp) {

    case 'listapersonajes':
      fondoNormal = '/images/fondos/Personajes.png';
      fondoHalloween = '/images/fondos/PersonajesHalloween.png';
      fondoNavidad ='images/fondos/PersonajesNavidad.png';
      break;

    case 'eyecandy':
      fondoNormal = 'images/fondos/EyeCandy.gif';
      fondoHalloween = '/images/fondos/EyeCandyHalloween.png';
      fondoNavidad ='images/fondos/EyeCandyNavidad.png';
      break;
  
    default:
      fondoNormal = '';
      fondoHalloween = 'images/fondos/DefaultHalloween.png';
      fondoNavidad = 'images/fondos/DefaultNavidad.png';
      break;
    }

    if (this.halloween == true) {
      return fondoHalloween;
    } else if (this.navidad == true) {
      return fondoNavidad;
    } else {
      return fondoNormal;
    }
  }

  eventoColorFuente (comp:string): string {
    let fuenteNormal = "";
    let fuenteEvento = "";
    
  switch (comp) {
  
    default:
      fuenteNormal = '#000000';
      fuenteEvento = '';
      break;
    }

    if (this.halloween == true) {
      return fuenteEvento;
    } else if (this.navidad == true) {
      return fuenteEvento;
    } else {
      return fuenteNormal;
    }
  }
}
