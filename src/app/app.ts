import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contador } from './contador/contador/contador';
import { Matatopos } from "./matatopos/matatopos";
import {MatButtonModule} from '@angular/material/button';
import { Navbar } from './navbar/navbar';
import { Carrera } from './carrera/carrera';

@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Introduccion');
}
