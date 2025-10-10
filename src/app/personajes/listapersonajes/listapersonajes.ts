import { Component } from '@angular/core';
import { Fichapersonaje } from '../fichapersonaje/fichapersonaje';
import { Personaje } from '../../models/personaje.models';

@Component({
  selector: 'app-listapersonajes',
  imports: [Fichapersonaje],
  templateUrl: './listapersonajes.html',
  styleUrl: './listapersonajes.css'
})


export class Listapersonajes {

    Personajes:Personaje[]= [
      new Personaje('Aragorn', 'Humano', 4, 'https://i.imgur.com/dV1K5lI.jpg'),
      new Personaje('algo', 'algo' , 4 , 'https://i.imgur.com/dV1K5lI.jpg'),
      new Personaje('algo', 'algo' , 4 , 'https://i.imgur.com/dV1K5lI.jpg'),
      new Personaje('algo', 'algo' , 4 , 'https://i.imgur.com/dV1K5lI.jpg'),
      new Personaje('algo', 'algo' , 4 , 'https://i.imgur.com/dV1K5lI.jpg')
    ]
  }
    
