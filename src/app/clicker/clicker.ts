import { Component } from '@angular/core';
import { ClickerService } from '../services/clicker-service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-clicker',
  imports: [DecimalPipe],
  templateUrl: './clicker.html',
  styleUrl: './clicker.css'
})
export class Clicker {
  constructor(public game: ClickerService) {}
}
