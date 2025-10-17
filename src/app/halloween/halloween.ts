import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-halloween',
  imports: [ReactiveFormsModule],
  templateUrl: './halloween.html',
  styleUrl: './halloween.css'
})
export class Halloween {

  fiesta: FormGroup;

  constructor(private fb: FormBuilder){
    this.fiesta = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.email]],
      tipoInvitado:['',[Validators.required]],
      disfraz:['',[Validators.required]],
      fechaLlegada:['',[Validators.required]],
      aceptaReglas: ['',[Validators.required]]

    })
  }

    mostrar(){
    if(this.fiesta.invalid) {
      console.log("El formulario contiene errores");
    } else {
    console.log(this.fiesta.value);
    }
  }

  resetear() {
    this.fiesta.reset({
      nombre: '',
      email: ''
    });
  }
}

