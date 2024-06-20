import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './template/home/home.component';
import { ListarLinhasComponent } from './components/linhas/listar-linhas/listar-linhas.component';
import { CadastrarLinhasComponent } from './components/linhas/cadastrar-linhas/cadastrar-linhas.component';

const routes: Routes = [

  {path:'', component:HomeComponent},
  {path:'linhas', component:ListarLinhasComponent},
  {path:'linhas/cadastrar', component:CadastrarLinhasComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
