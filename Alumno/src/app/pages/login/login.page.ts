import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { iAlumnosId } from 'src/app/interfaces/interfaces';
import { BaseDeDatosService } from 'src/app/services/base-de-datos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  alumno={
    email:"",
    password:""
  }


  constructor(private alertController: AlertController, private menuController: MenuController, private bd:BaseDeDatosService, 
    private router:Router) {}

  ngOnInit() {
  }

  async msjOlvideCont(){
    const alert = await this.alertController.create({
      header: 'Alto ahí!',
      message: 'Todavia no programamos esto :c',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async msjNotFound(){
    const alert = await this.alertController.create({
      header: 'Correo no registrado',
      message: 'Para poder iniciar sesión debe registrarse.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async msjFormInvalid(){
    const alert = await this.alertController.create({
      header: 'Formulario inválido',
      message: 'Recordar registrar una cuenta antes de iniciar sesión.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  ValidFormLogin=new FormGroup({
    corA: new FormControl("", [Validators.required]),
    conA: new FormControl("", [Validators.required])
  })

  correoExiste=[]
  cuenta:iAlumnosId={
    id:0,
    correoA:"",
    nombreA:"",
    apellidoA:"",
    contrasenaA:""
  }

  contrInco=0

  login(){
    this.bd.buscarA(this.alumno.email).subscribe(resp => {
      let listString=JSON.stringify(resp)
      this.correoExiste=JSON.parse(listString)
      this.cuenta=this.correoExiste[0]
      if(this.correoExiste.length===1 && this.alumno.password===this.cuenta.contrasenaA){
        this.router.navigateByUrl("/inicio2")
        sessionStorage.setItem("id",String(this.cuenta.id))
      }
      else if(this.correoExiste.length===1 && this.alumno.password!==this.cuenta.contrasenaA){
        this.contrInco=1
      }
      else if(this.ValidFormLogin.invalid){
        this.msjFormInvalid()
      }
      else if(this.correoExiste.length===0){
        this.msjNotFound()
      }
    })
  }

  mostrarMenu(){
    this.menuController.open('idmenu');
  }
  
}
