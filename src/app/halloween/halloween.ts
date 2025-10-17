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
      disfraz:['',[Validators.required]],
      fechaLlegada:['',[Validators.required]],
      aceptaReglas: [false, [Validators.requiredTrue]]

    })
  }

  comprobar(){
    if(this.fiesta.invalid) {
      console.log("El formulario contiene errores");
      
    } else {
      console.log(this.fiesta.value);
    }
  }

  resetear() {
    this.fiesta.reset({
      nombre: '',
      email: '',
      tipoInvitado:'',
      disfraz:'',
      fechaLlegada:'',
      aceptaReglas:''
    });
  }
}

