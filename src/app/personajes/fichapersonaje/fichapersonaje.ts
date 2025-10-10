import { Component, Input } from '@angular/core';
import { Personaje } from '../../models/personaje.models';
import { Listapersonajes } from '../listapersonajes/listapersonajes';

@Component({
  selector: 'app-fichapersonaje',
  imports: [],
  templateUrl: './fichapersonaje.html',
  styleUrl: './fichapersonaje.css'
})
export class Fichapersonaje {
  @Input() personajito:Personaje = new Personaje('Aragorn', 'Humano', 4, '/images/hell-knight.png');

  }