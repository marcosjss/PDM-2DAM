export class Personaje {

        
    nombre:string;
    raza:string;
    fuerza: number;
    imagen:string;

    constructor (nombre:string, raza:string, fuerza:number, imagen:string){
        this.nombre = nombre;
        this.raza = raza;
        this.fuerza = fuerza;
        this.imagen =  imagen;
    };
    
}