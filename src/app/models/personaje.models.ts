export class Personaje {

        
    nombre:string;
    raza:string; //raza
    fuerza: number;
    imagen:string;

    constructor (nombre:string, raza:string /*raza*/, fuerza:number, imagen:string){
        this.nombre = nombre;
        this.raza = raza;
        this.fuerza = fuerza;
        this.imagen =  imagen;  
    };
            
    //export enum raza {
       // Humano = COLOR ;
    //}

}