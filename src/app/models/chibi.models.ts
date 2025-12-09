export class Chibi {

  id: number;
  clase: string;
  posX: number;
  velocidad: number;
  transformar: string;

  constructor (id:number, clase:string, posX: number, velocidad:number, transformar:string){
    this.id = id;
    this.clase = clase;
    this.posX = posX;
    this.velocidad = velocidad;
    this.transformar = transformar;
  }
}