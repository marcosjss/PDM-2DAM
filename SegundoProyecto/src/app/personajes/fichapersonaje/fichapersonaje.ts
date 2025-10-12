import { Component, Input } from '@angular/core';
import { Personaje } from '../../models/personaje.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fichapersonaje',
  imports: [CommonModule],
  templateUrl: './fichapersonaje.html',
  styleUrl: './fichapersonaje.css'
})
export class Fichapersonaje {
  @Input() personajito:Personaje = new Personaje('Ikit Claw', 'Skaven', 4, 'https://2d4chan.org/mediawiki/thumb.php?f=Warhammer_Ikit_Claw.jpg&width=300');

  getColorFondo(): string {
    switch (this.personajito.raza.toLowerCase()) {
      case 'skaven':
        return '#15ff00ff'; 
      case 'demonio del caos':
        return '#070000b9';
      case 'demonio de tzeentch':
        return '#307dd6ff';
      case 'ogro':
        return '#81692cff';
      case 'vampiro':
        return '#a80505ff';
      default:
        return '#ffffffff';
    }
  }

  getColorLetra(): string {
    switch (this.personajito.raza.toLowerCase()) {
      case 'demonio del caos':
        return '#e9e3e3ff';              
      case 'vampiro':
        return '#e9e3e3ff';
      case 'vampiro':
        return '#e9e3e3ff';
      default:
        return '#000000ff';
    }
  }
  getEstrellas(): string[] {
    return Array(this.personajito.fuerza).fill('⭐');
  }
}