import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';



@Component({
  selector: 'app-halloween',
  imports: [ReactiveFormsModule, MatCheckboxModule, MatCardModule, CommonModule, FormsModule, MatRadioModule],
  templateUrl: './halloween.html',
  styleUrl: './halloween.css',
})
export class Halloween {

  fiesta: FormGroup;

  constructor(private fb: FormBuilder){
    this.fiesta = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.email]],
      tipoInvitado:['',[Validators.required]],
      disfraz:[[Validators.required]],
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
  }

  const nombre = this.fiesta.get('nombre')?.value;
  this.mensaje =`🎃 ¡Bienvenido/a, ${nombre}! Tu entrada ha sido registrada con exito`;

  this.formEnviado = false;
  //this.resetear();
  }

  resetear() {
    this.fiesta.reset();
    this.mensaje = ""
  }


  //Cuenta atras Halloween

  mensajeHalloween: String = "";
  intervalo: any;
  segundos: number = 0;

  octubre31: number = 0;
  rn: number = 0; //fecha ahora mismo
  halloween: number = 0; //31 de octubre menos fecha actual


  ngOnInit() {
    this.contadorHalloween();
  }

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
