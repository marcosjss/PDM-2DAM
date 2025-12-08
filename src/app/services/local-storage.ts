import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorage {

  setItem(key:string,item:string) {
    localStorage.setItem(key, item);
  }

  getItem(key:string) {
    return localStorage.getItem(key);
  }

  removeItem(key:string){
    localStorage.removeItem(key);
  }

  clear(){
    localStorage.clear();
  }

  //Formulario
  setNombre(nombre:string){
    localStorage.setItem("nombre",nombre);
  }

  setEmail(email:string){
    localStorage.setItem("email", email);
  }

  setTipoInvitado(tipoInvitado:string){
    localStorage.setItem("tipoInvitado", tipoInvitado);
  }

  setDisfraz(disfraz:string){
    localStorage.setItem("difraz", disfraz)
  }

  setFechaLlegada(fechaLlegada:string){
    localStorage.setItem("fechaLlegada",fechaLlegada)
  }

  setAceptaReglas(aceptaReglas:string){
    localStorage.setItem("aceptaReglas",aceptaReglas)
  }

  //Nombre en el navbar
  getNombre() {
    return localStorage.getItem("nombre");
  }

  //Eventos
  setEventState(key: 'halloween' | 'navidad', state: 'on' | 'off') {
    localStorage.setItem(key, state);
  }
    
  isEventActive(key: 'halloween' | 'navidad'): boolean {
   return localStorage.getItem(key) === "on";
  }
}
