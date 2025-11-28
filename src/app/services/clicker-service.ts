import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickerService {
  monedas = 0;
  monedasPerClick = 1;
  monedasPerSecond = 0;
  coste = 1;


  constructor() {
    this.loadGame();
    setInterval(() => this.tick(), 1000);
  }

  clickMoneda() {
    this.monedas += this.monedasPerClick;
    this.saveGame();
  }

  tick() {
    this.monedas += this.monedasPerSecond;
    this.saveGame();
  }

  buyUpgrade(coste:number, type: 'click' | 'auto', cantidad: number) {
      this.monedas -= coste;

      if (type === 'click') { 
        this.monedasPerClick += cantidad
      }
      if (type === 'auto') { 
        this.monedasPerSecond += cantidad;
      }

      this.saveGame();
  }


  //Mejoras
  mejoraClick1 = 1;
  mejoraAuto1 = 1;

  mejorarClick1() {
    this.coste = 50 * (this.mejoraClick1/2);
    if (this.monedas >= this.coste) {
      this.mejoraClick1 ++;
      this.buyUpgrade(this.coste, 'click', 1);
    }
  }

  mejorarAuto1() {
    this.coste = 20 * (this.mejoraAuto1/2);
    if (this.monedas >= this.coste) {
      this.buyUpgrade(this.coste, 'auto', 1);
      this.mejoraAuto1 ++;
    }
  }


  //LocalStorage
  saveGame() {
    localStorage.setItem('gameState', JSON.stringify({
      monedas: this.monedas,
      monedasPerClick: this.monedasPerClick,
      monedasPerSecond: this.monedasPerSecond,

      mejoraClick1: this.mejoraClick1,
      mejoraAuto1: this.mejoraAuto1,
    }));
  }

  loadGame() {
    const data = localStorage.getItem('gameState');
    if (data) {
      const state = JSON.parse(data);
      this.monedas = state.monedas;
      this.monedasPerClick = state.monedasPerClick;
      this.monedasPerSecond = state.monedasPerSecond;

      this.mejoraClick1 = state.mejoraClick1;
      this.mejoraAuto1 = state.mejoraAuto1;
    }
  }

  resetGame() {
    localStorage.removeItem('gameState');
    this.monedas = 0;
    this.monedasPerClick = 1;
    this.monedasPerSecond = 0;
    
    this.mejoraClick1 = 1;
    this.mejoraAuto1 = 1;
  }
}
