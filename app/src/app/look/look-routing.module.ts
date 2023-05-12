import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrobancadaComponent } from './page/cadastrobancada/cadastrobancada.component';
import { CadastroimpressoraComponent } from './page/cadastroimpressora/cadastroimpressora.component';
import { GerenciamentoimpressoraComponent } from './page/gerenciamentoimpressora/gerenciamentoimpressora.component';
import { MapaEmpressorasComponent } from './page/mapa-empressoras/mapa-empressoras.component';

const routes: Routes = [

  {
    path: 'cadastroimp',
    component: CadastroimpressoraComponent
  },
  {
    path: 'Gerenciamento',
    component: GerenciamentoimpressoraComponent
  },
  {
    path: 'Mapa',
    component: MapaEmpressorasComponent
  },
  {
    path: 'cadban',
    component: CadastrobancadaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LookRoutingModule { }
