import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEventoComponent } from './crear-evento/crear-evento.component';
import { CrudComponent } from './crud/crud.component';
import { EventosComponent } from './eventos/eventos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'lista', component: EventosComponent},
  { path: 'crud', component: CrudComponent},
  { path: 'agregar', component: CrearEventoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
