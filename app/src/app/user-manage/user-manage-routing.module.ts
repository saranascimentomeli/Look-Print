import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenciamentoUsuarioComponent } from './pages/gerenciamento-usuario/gerenciamento-usuario.component';
import { TesteComponent } from './pages/teste/teste.component';

const routes: Routes = [

  {
    path : 'gerenciamento',
    component : GerenciamentoUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManageRoutingModule { }
