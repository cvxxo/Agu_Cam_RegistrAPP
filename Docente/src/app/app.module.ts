import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroDComponent } from './pages/registro-d/registro-d.component';
import { LoginDComponent } from './pages/login-d/login-d.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { GenerarQRComponent } from './pages/generar-qr/generar-qr.component';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    RegistroDComponent,
    LoginDComponent,
    InicioComponent,
    GenerarQRComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
