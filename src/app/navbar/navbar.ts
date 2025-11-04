import {Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule, NgClass } from '@angular/common';
import { MatSlideToggleModule, MatSlideToggle } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule, RouterLink, CommonModule, NgClass, MatSlideToggleModule, MatSlideToggle, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  pi:string="pipipi";

  halloween:boolean=false;
  navidad:boolean=false;

  cambioToggle(toggle: 'halloween' | 'navidad', value: boolean) {
    if (toggle === 'halloween' && value) {
      this.navidad = false;
  } else if (toggle === 'navidad' && value) {
      this.halloween = false;
  }
}
}
