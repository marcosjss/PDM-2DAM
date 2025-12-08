import {Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule, NgClass } from '@angular/common';
import { MatSlideToggleModule, MatSlideToggle } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { Evento } from '../services/evento';
import { LocalStorage } from '../services/local-storage';




@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule, RouterLink, CommonModule, NgClass, MatSlideToggleModule, MatSlideToggle, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {
  halloween:boolean=false;
  navidad:boolean=false;
  nombre:String | null="";

  constructor(private evento:Evento, public almacenamiento:LocalStorage) {

  }

  ngOnInit() {
    this.nombre=this.almacenamiento.getNombre();
    this.halloween=this.evento.halloween;
    this.navidad=this.evento.navidad;
  }

  cambioToggle(toggle: 'halloween' | 'navidad') {
    if (toggle === 'halloween' && this.halloween) {
      this.navidad = false;
      this.evento.cambiarHalloween(true);
      this.evento.cambiarNavidad(false);
    } else if (toggle === 'navidad' && this.navidad) {
      this.halloween = false;
      this.evento.cambiarNavidad(true);
      this.evento.cambiarHalloween(false);
    } else {
      this.evento.cambiarHalloween(false);
      this.evento.cambiarNavidad(false);
    }
  }

}
