import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroDComponent } from './pages/registro-d/registro-d.component';
import { LoginDComponent } from './pages/login-d/login-d.component';

const routes: Routes = [
  {
    path:'registro-d',
    component: RegistroDComponent
  },
  {
    path:'login-d',
    component: LoginDComponent
  },
  {
    path:'**',
    redirectTo: 'registro-d'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
