import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  alumno={
    email:'',
    password:''
  }


  constructor(private alertController: AlertController, private menuController: MenuController) {}

  ngOnInit() {
  }

  async mostrarMensaje(){
    const alert = await this.alertController.create({
      header: 'Gracias!!',
      message: 'Se ha iniciado sesión en el sistema!',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async mostrarOtro(){
    const alert = await this.alertController.create({
      header: 'Alto ahí!',
      message: 'Todavia no programamos esto :c',
      buttons: ['OK'],
    });
    await alert.present();
  }


  Enviar(){
 
  this.mostrarMensaje();
  this.alumno.email='';
  this.alumno.password='';

  }

  EnviarOtro(){
 
  this.mostrarOtro();
  this.alumno.email='';
  this.alumno.password='';

  }

  mostrarMenu(){
    this.menuController.open('idmenu');
  }
  
}
