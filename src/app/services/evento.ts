import { EventEmitter, Injectable } from '@angular/core';
import { LocalStorage } from './local-storage';

@Injectable({
  providedIn: 'root'
})
export class Evento {

  halloween:boolean = false;
  navidad:boolean = false;

  eventoEmitir = new EventEmitter<boolean>();

  cambiarHalloween(esHalloween:boolean) {
    this.halloween = esHalloween;
    this.eventoEmitir.emit(this.halloween);
  }

  cambiarNavidad(esNavidad:boolean) {
    this.navidad = esNavidad;
    this.eventoEmitir.emit(this.navidad);
  }

  eventoCambio (comp:string): string {
    let fondoNormal = "";
    let fondoHalloween = "";
    let fondoNavidad ="";
    
  switch (comp) {
      
    case 'navbar':
      fondoNormal = "#ff0000";
      fondoHalloween = "";
      fondoNavidad = "";
      break;

    case 'listapersonajes':
      fondoNormal = '/images/personajes/Fondo.png';
      fondoHalloween = 'https://wallpapers.com/images/hd/vampire-counts-warhammer-j5apbyjbkn85206h.jpg';
      fondoNavidad ='https://sillyrobotcards.ams3.cdn.digitaloceanspaces.com/generated-cards/294c9705-82fe-438e-936c-545907a79687/1a80ed3c-e6f2-41f1-b5e5-f82830a0c0aa';
      break;
  
    default:
      fondoNormal = '';
      fondoHalloween = 'https://wallpapers.com/images/hd/1920-x-1080-halloween-oaa20t2kqh6sy4sd.jpg';
      fondoNavidad = 'https://s1.1zoom.me/b5050/538/Christmas_Christmas_tree_Gifts_512201_1920x1080.jpg';
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
}
