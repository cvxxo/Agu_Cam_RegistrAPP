import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroDComponent } from './pages/registro-d/registro-d.component';
import { LoginDComponent } from './pages/login-d/login-d.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { autorizadoGuard } from './guards/autorizado.guard';
import { GenerarQRComponent } from './pages/generar-qr/generar-qr.component';

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
    path:'inicio',
    component: InicioComponent,
    canActivate: [autorizadoGuard]
  },
  {
    path:'generarQR',
    component: GenerarQRComponent,
    canActivate: [autorizadoGuard]
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
