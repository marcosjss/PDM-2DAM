import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component ({
  selector: 'app-matatopos',
  imports: [CommonModule],
  templateUrl: './matatopos.html',
  styleUrl: './matatopos.css'
})

export class Matatopos {
numero:number= 0;

contador:number=0;

min:number= 1;
max:number= 9;

contadorTopos:number = 0;

  topoSale(){
    this.numero = Math.floor(Math.random() * (this.max - this.min + 1)+ this.min)
  }

  topoClick1(){
      if(this.numero == 1){
        console.log ("Le has dado al topo");
        this.contadorTopos++;
      } else {
        console.log ("Has fallado");
      }
   this.topoSale();

    }

  topoClick2(){
      if(this.numero == 2){
        console.log ("Le has dado al topo");
        this.contadorTopos++;
      } else {
        console.log ("Has fallado");
      }
    this.topoSale();
    }

  topoClick3(){
      if(this.numero == 3){
        console.log ("Le has dado al topo");
        this.contadorTopos++;
      } else {
        console.log ("Has fallado");
      }
    this.topoSale();
    }

  topoClick4(){
      if(this.numero == 4){
        console.log ("Le has dado al topo");
        this.contadorTopos++;
      } else {
        console.log ("Has fallado");
      }    
    this.topoSale();
    }

  topoClick5(){
      if(this.numero == 5){
        console.log ("Le has dado al topo");
        this.contadorTopos++;
      } else {
        console.log ("Has fallado");
      }
    this.topoSale();
    }

  topoClick6(){
      if(this.numero == 6){
        console.log ("Le has dado al topo");
        this.contadorTopos++;
      } else {
        console.log ("Has fallado");
      }      
    this.topoSale();
    }
    
  topoClick7(){
      if(this.numero == 7){
        console.log ("Le has dado al topo");
        this.contadorTopos++;
      } else {
        console.log ("Has fallado");
      }
    this.topoSale();
    }

  topoClick8(){
      if(this.numero == 8){
        console.log ("Le has dado al topo");
        this.contadorTopos++;
      } else {
        console.log ("Has fallado");
      }
    this.topoSale();
    }

  topoClick9(){
      if(this.numero == 9){
        console.log ("Le has dado al topo");
        this.contadorTopos++;
      } else {
        console.log ("Has fallado");
      }
    this.topoSale();
    }
  } 

