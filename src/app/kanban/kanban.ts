import { Component } from '@angular/core';
import { ListaTarea } from '../models/tarea';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { CdkDragDrop, CdkDrag, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatMenuModule } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-kanban',
  imports: [CdkDropListGroup, CdkDropList, CdkDrag, FormsModule, ReactiveFormsModule, MatMenuModule, MatIcon, CommonModule],
  templateUrl: './kanban.html',
  styleUrl: './kanban.css'
})
export class Kanban {

  tarea: FormGroup;

  k:number = 0;

  
  todo:ListaTarea[] = [];

  doing:ListaTarea[] = [];

  done:ListaTarea[] = [];


  constructor(private fb: FormBuilder){
    this.tarea = this.fb.group({
      nombre: ['', [Validators.required]],
      descripcion: ['',[Validators.required]]
      })
  }

  drop(event: CdkDragDrop<ListaTarea[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  comprobar(){
    if (this.tarea.invalid) {
      console.log('El formulario contiene errores');
      Object.values(this.tarea.controls).forEach(control => {control.markAsTouched();});
    }

    else {
      console.log(this.tarea.value);
      this.añadir(this.todo, this.tarea.get('nombre')?.value, this.tarea.get('descripcion')?.value)
      this.tarea.reset();
    }
  }

  borrar(lista:ListaTarea[], tarea:ListaTarea) {
    for (this.k = 0; this.k < lista.length; this.k++) {
      if (lista[this.k].id == tarea.id) {
        lista.splice(this.k,1)
      }
    }
  }

  añadir(lista:ListaTarea[], nombre:string, descripcion:string) {
    lista.push({
      id: crypto.randomUUID(),
      nombre: nombre,
      descripcion: descripcion
    } )
  }
}

