import { CommonModule } from '@angular/common';
import { Component, HostBinding, model, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { LocalStorage } from '../services/local-storage';
import { Evento } from '../services/evento';



@Component({
  selector: 'app-halloween',
  imports: [ReactiveFormsModule, MatCheckboxModule, MatCardModule, CommonModule, FormsModule, MatRadioModule],
  templateUrl: './halloween.html',
  styleUrl: './halloween.css',
})
export class Halloween implements OnInit{
  @HostBinding('style.backgroundImage') fondo: string ="";
  @HostBinding('style.color') colorFuente: string = "";
    ngOnInit():void {
      this.actualizarFondo();

      this.evento.eventoEmitir.subscribe(() => {
        this.actualizarFondo();
      });
    }

    actualizarFondo(){
      this.fondo = `url('${this.evento.eventoCambio('default')}')`;
      this.colorFuente = this.evento.eventoColorFuente('default');
    }
    
  fiesta: FormGroup;

  constructor(private fb: FormBuilder, private almacenamiento: LocalStorage, private evento:Evento){
    this.fiesta = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.email]],
      tipoInvitado:['',[Validators.required]],
      disfraz:['',[Validators.required]],
      fechaLlegada:['',[Validators.required]],
      aceptaReglas: [false, [Validators.requiredTrue]]

    })
  }

  //Submit

  formEnviado = false;
  mensaje: String ="";

  comprobar(){
    this.formEnviado = true;
    console.log(this.fiesta.value);

    if (this.fiesta.invalid) {
      console.log('El formulario contiene errores');
      Object.values(this.fiesta.controls).forEach(control => {control.markAsTouched();});
      this.mensaje = "";
      return;
    } else {    
      const nombre = this.fiesta.get('nombre')?.value;
      this.mensaje =`🎃 ¡Bienvenido/a, ${nombre}! Tu entrada ha sido registrada con exito`;

      this.almacenamiento.setNombre(this.fiesta.value.nombre);
      this.almacenamiento.setEmail(this.fiesta.value.email);
      this.almacenamiento.setTipoInvitado(this.fiesta.value.tipoInvitado);
      this.almacenamiento.setDisfraz(this.fiesta.value.disfraz);
      this.almacenamiento.setFechaLlegada(this.fiesta.value.fechaLlegada);
      this.almacenamiento.setAceptaReglas(this.fiesta.value.aceptaReglas);
    } 

  this.formEnviado = false;
  }

  resetear() {
    this.fiesta.reset();
    this.mensaje = "";
  }


  //Cuenta atras Halloween

  mensajeHalloween: String = "";
  intervalo: any;
  segundos: number = 0;

  octubre31: number = 0;
  rn: number = 0; //fecha ahora mismo
  halloween: number = 0; //31 de octubre menos fecha actual

  contadorHalloween() {
    const octubre31 = new Date(new Date().getFullYear(),9,31,0,0,0);
    this.intervalo = setInterval(() => {
      this.rn = new Date().getTime();
      this.halloween = octubre31.getTime() - this.rn;

      if (this.halloween <= 0) {
        return;
      }
        this.segundos = Math.floor(this.halloween/1000);
        this.mensajeHalloween = `${this.segundos}`})
    }
  }
