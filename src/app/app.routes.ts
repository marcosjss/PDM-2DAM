import { Routes } from '@angular/router';
import { Contador } from './contador/contador/contador';
import { Matatopos } from "./matatopos/matatopos";
import { Carrera } from './carrera/carrera';
import { PasoParametros } from './paso-parametros/paso-parametros';
import { Eyecandy } from './eyecandy/eyecandy';
import { Listapersonajes } from './personajes/listapersonajes/listapersonajes';
import { Formulario } from './formulario/formulario';
import { Halloween } from './halloween/halloween';
import { Kanban } from './kanban/kanban';
import { Clicker } from './clicker/clicker';


export const routes: Routes = [
    {path: 'contador', component: Contador},
    {path: 'matatopos', component: Matatopos},
    {path: 'carrera', component: Carrera},
    {path: 'pasoparametros/:num', component: PasoParametros},    
    {path: 'eyecandy', component: Eyecandy},
    {path: 'lista-personajes', component:Listapersonajes},
    {path: 'formulario', component:Formulario},
    {path: 'halloween', component:Halloween},
    {path: 'kanban', component:Kanban},
    {path: 'clicker', component:Clicker}
];
