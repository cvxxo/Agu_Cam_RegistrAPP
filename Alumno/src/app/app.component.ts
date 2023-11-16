import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface app_pages{
  nombre:string;
  adressPage:string;
  icon:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menuController: MenuController) {
  }


  app_pages: app_pages[]=[
    {
      nombre:'Inicio',
      adressPage:'/inicio',
      icon:'home'
    },
    {
      nombre:'Login',
      adressPage:'/login',
      icon:'log-in'
    },
    {
      nombre:'Registro',
      adressPage:'/registro',
      icon:'person-add'
    },
    {
      nombre:'Acerca de la APP',
      adressPage:'/informacion',
      icon:'information-circle'
    }
  ]

  cerrarMenu(){
    this.menuController.close('idmenu');
  }
}