import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'menu',
    component: MenuComponent,
    children: [

      {
        path: 'usuarios',
        loadChildren: () => import('./user-manage/user-manage.module').then(m => m.UserManageModule)
      },
      {
        path: 'look',
        loadChildren: () => import('./look/look.module').then(m => m.LookModule)
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
