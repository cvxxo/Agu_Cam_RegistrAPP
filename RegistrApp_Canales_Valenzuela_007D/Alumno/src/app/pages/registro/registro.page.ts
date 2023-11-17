import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { BaseDeDatosService } from 'src/app/services/base-de-datos.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { iAlumnos } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  alumno:iAlumnos={
    correoA:'',
    nombreA:'',
    apellidoA:'',
    contrasenaA:''
  }

  ValidFormRegA=new FormGroup({
    nomA:new FormControl("", [Validators.required, Validators.minLength(3)]),
    apeA:new FormControl("", [Validators.required, Validators.minLength(3)]),
    corA:new FormControl("", [Validators.required, Validators.email]),
    conA:new FormControl("", [Validators.required, Validators.minLength(8)])
  })

  constructor(private alertController: AlertController, private menuController: MenuController, private bd:BaseDeDatosService) {}

  ngOnInit() {
  }

  async mensajeRegExito(){
    const alert = await this.alertController.create({
      header: 'Bienvenid@ '+this.alumno.nombreA,
      message: 'A sido registrado correctamente',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async mensajeRegInvalid(){
    const alert = await this.alertController.create({
      header: 'Formulario invalido',
      message: 'Debe completar todos los campos',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async mensajeCuentaExiste(){
    const alert = await this.alertController.create({
      header: 'ERROR',
      message: 'Usuario ya registrado',
      buttons: ['OK'],
    });
    await alert.present();
  }

  alumnos=[]

  registrarA(){
    this.bd.buscarA(this.alumno.correoA).subscribe(resp => {
      let listString=JSON.stringify(resp)
      this.alumnos=JSON.parse(listString)
      if(this.ValidFormRegA.valid && this.alumnos.length===0){
        this.bd.crearAlumno(this.alumno).subscribe()
        this.mensajeRegExito();
      }
      else if(this.alumnos.length>0){
        this.mensajeCuentaExiste();
      }
      else if(this.ValidFormRegA.invalid){
        this.mensajeRegInvalid();
      }
    })
  }

  mostrarMenu(){
    this.menuController.open('idmenu');
  }
}
