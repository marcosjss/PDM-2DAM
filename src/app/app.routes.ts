import { Routes } from '@angular/router';
import { Contador } from './contador/contador/contador';
import { Matatopos } from "./matatopos/matatopos";
import { Carrera } from './carrera/carrera';
import { Listapersonajes } from './personajes/listapersonajes/listapersonajes';
import { Halloween } from './halloween/halloween';
import { Kanban } from './kanban/kanban';
import { Clicker } from './clicker/clicker';
import { Eyecandy } from './eyecandy/eyecandy';


export const routes: Routes = [
    {path: 'contador', component: Contador},
    {path: 'matatopos', component: Matatopos},
    {path: 'carrera', component: Carrera},
    {path: 'eyecandy', component: Eyecandy},
    {path: 'lista-personajes', component:Listapersonajes},
    {path: 'halloween', component:Halloween},
    {path: 'kanban', component:Kanban},
    {path: 'clicker', component:Clicker}
];
