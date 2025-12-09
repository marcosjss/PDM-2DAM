import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickerService {
  monedas = 0;
  monedasPerClick = 1;
  monedasPerSecond = 0;
  coste = 1;

  isBoostActive = false;
  boostMultiplier = 2; 
  boostDuration = 10; 
  boostRemainingTime = 0;

  isPowerUpVisible = false;
  powerUpTimeout: any; 
  powerUpInterval: any;
  powerUpPosition = { top: '50%', left: '50%' };

  mejoraClick1 = 1;
  mejoraAuto1 = 1;
  mejoraAuto2 = 1;
  mejoraAuto3 = 1;
  mejoraAuto4 = 1;
  mejoraAuto5 = 1;
  mejoraAuto6 = 1;

  constructor() {
    this.loadGame();
    setInterval(() => this.tick(), 1000);
    this.setupPowerUpSpawner();
  }

  
  clickMoneda() {
    let boost = this.isBoostActive ? this.boostMultiplier : 1;
    this.monedas += this.monedasPerClick * boost;
    this.saveGame();
  }

  tick() {
    let boost = this.isBoostActive ? this.boostMultiplier : 1;
    this.monedas += this.monedasPerSecond * boost;
    this.saveGame();
    
    if (this.isBoostActive) {
        this.boostRemainingTime--;
        if (this.boostRemainingTime <= 0) {
            this.deactivateBoost();
        }
    }
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

  mejorarClick1() {
    const coste = 50 * (this.mejoraClick1 / 2);
    if (this.monedas >= coste) {
      this.mejoraClick1++;
      this.buyUpgrade(coste, 'click', 1);
    }
  }

  mejorarAuto1() {
    const coste = 20 * (this.mejoraAuto1);
    if (this.monedas >= coste) {
      this.buyUpgrade(coste, 'auto', 1);
      this.mejoraAuto1++;
    }
  }

  mejorarAuto2() {
    const coste = 100 * (this.mejoraAuto2);
    if (this.monedas >= coste) {
      this.buyUpgrade(coste, 'auto', 10);
      this.mejoraAuto2++;
    }
  }

  mejorarAuto3() {
    const coste = 500 * (this.mejoraAuto3);
    if (this.monedas >= coste) {
      this.buyUpgrade(coste, 'auto', 100);
      this.mejoraAuto3++;
    }
  }

  mejorarAuto4() {
    const coste = 2500 * (this.mejoraAuto4);
    if (this.monedas >= coste) {
      this.buyUpgrade(coste, 'auto', 1000);
      this.mejoraAuto4++;
    }
  }

  mejorarAuto5() {
    const coste = 12000 * (this.mejoraAuto5);
    if (this.monedas >= coste) {
      this.buyUpgrade(coste, 'auto', 10000);
      this.mejoraAuto5++;
    }
  }

  mejorarAuto6() {
    const coste = 30000 * (this.mejoraAuto6 / 2);
    if (this.monedas >= coste) {
      this.buyUpgrade(coste, 'auto', 25000);
      this.mejoraAuto6++;
    }
  }

  setupPowerUpSpawner() {
    const minDelay = 15000; 
    const maxDelay = 30000;
    
    const spawnPowerUp = () => {
        this.powerUpPosition = {
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`
        };
        this.isPowerUpVisible = true;
        
        this.powerUpTimeout = setTimeout(() => {
            this.isPowerUpVisible = false;
        }, 5000);
        const nextDelay = Math.random() * (maxDelay - minDelay) + minDelay;
        this.powerUpInterval = setTimeout(spawnPowerUp, nextDelay);
    };
    const initialDelay = Math.random() * (maxDelay - minDelay) + minDelay;
    this.powerUpInterval = setTimeout(spawnPowerUp, initialDelay);
  }

  activateBoost() {
    if (this.powerUpTimeout) {
        clearTimeout(this.powerUpTimeout);
    }
    this.isPowerUpVisible = false;

    this.isBoostActive = true;
    this.boostRemainingTime = this.boostDuration;
 
    this.saveGame();
  }

  deactivateBoost() {
    this.isBoostActive = false;
    this.boostRemainingTime = 0;
    this.saveGame();
  }

  formatNumber(num: number): string {
    if (num < 1000) {
      return num.toString();
    }
    
    if (num < 1000000) {
      return num.toLocaleString('es-ES', { maximumFractionDigits: 0 });
    }

    const units = [
      { value: 1e6, symbol: " millones" },
      { value: 1e9, symbol: " billones" },
      { value: 1e12, symbol: " trillones" },
      { value: 1e15, symbol: " cuatrillones" },
    ];

    const unit = units.slice().reverse().find(unit => num >= unit.value);

    if (unit) {
      const formatted = num / unit.value;
      
      if (formatted % 1 === 0) {
        return formatted.toLocaleString('es-ES', { maximumFractionDigits: 0 }) + unit.symbol;
      } else {
        return formatted.toLocaleString('es-ES', { maximumFractionDigits: 3, minimumFractionDigits: 1 }) + unit.symbol;
      }
    }

    return num.toLocaleString('es-ES', { maximumFractionDigits: 0 });
  }

  saveGame() {
    localStorage.setItem('gameState', JSON.stringify({
      monedas: this.monedas,
      monedasPerClick: this.monedasPerClick,
      monedasPerSecond: this.monedasPerSecond,

      mejoraClick1: this.mejoraClick1,
      mejoraAuto1: this.mejoraAuto1,
      mejoraAuto2: this.mejoraAuto2,
      mejoraAuto3: this.mejoraAuto3,
      mejoraAuto4: this.mejoraAuto4,
      mejoraAuto5: this.mejoraAuto5,
      mejoraAuto6: this.mejoraAuto6,
      
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
      this.mejoraAuto2 = state.mejoraAuto2;
      this.mejoraAuto3 = state.mejoraAuto3;
      this.mejoraAuto4 = state.mejoraAuto4;
      this.mejoraAuto5 = state.mejoraAuto5;
      this.mejoraAuto6 = state.mejoraAuto6;
    }
  }

  resetGame() {
    localStorage.removeItem('gameState');
    this.monedas = 0;
    this.monedasPerClick = 1;
    this.monedasPerSecond = 0;
    
    this.mejoraClick1 = 1;
    this.mejoraAuto1 = 1;
    this.mejoraAuto2 = 1;
    this.mejoraAuto3 = 1;
    this.mejoraAuto4 = 1;
    this.mejoraAuto5 = 1;
    this.mejoraAuto6 = 1;
    
    this.isBoostActive = false;
    this.boostRemainingTime = 0;
    this.isPowerUpVisible = false;
  }
}