import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  alumno={
    nombre:'',
    email:'',
    edad:'',
    password:'',
    jornada:'',
  }

  constructor(private alertController: AlertController, private menuController: MenuController) {}

  ngOnInit() {
  }

  async mostrarMensaje(){
    const alert = await this.alertController.create({
      header: 'Gracias!!',
      message: 'Se han registrado sus datos!',
      buttons: ['OK'],
    });
    await alert.present();
  }

  Enviar(){
   
    this.mostrarMensaje();
    this.alumno.nombre='';
    this.alumno.email='';
    this.alumno.password='';
    this.alumno.edad='';
    this.alumno.jornada='';

  }

  mostrarMenu(){
    this.menuController.open('idmenu');
  }
}
