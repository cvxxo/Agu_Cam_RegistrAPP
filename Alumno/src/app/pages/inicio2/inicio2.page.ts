import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';
import { iAlumnos, iAlumnosId } from 'src/app/interfaces/interfaces';
import { BaseDeDatosService } from 'src/app/services/base-de-datos.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

interface app_pages{
  nombre:string;
  adressPage:string;
  icon:string;
}

@Component({
  selector: 'app-inicio2',
  templateUrl: './inicio2.page.html',
  styleUrls: ['./inicio2.page.scss'],
})
export class Inicio2Page implements OnInit {

  constructor(private menuC:MenuController, private bd:BaseDeDatosService, private alertC:AlertController, private router:Router) {
    this.bd.buscarAid(String(sessionStorage.getItem("id"))).subscribe(resp => {
      this.userActivo=resp 
    })
  }

  cardDatosDefault=1

  userActivo: iAlumnosId={
    id:0,
    correoA:"",
    nombreA:"",
    apellidoA:"",
    contrasenaA:""
  }  

  ngOnInit() { }

  datosNuevos={
    correoA:"",
    contraA:""
  }

  llegadaAPI=[]

  iconomodificarC=1
  iconomodificarP=1
  btnguardar=0

  iconomodificarCF(){
    this.iconomodificarC=0
    this.btnguardar=1
  }

  iconomodificarPF(){
    this.iconomodificarP=0
    this.btnguardar=1
  }

  validFormMod= new FormGroup({
    corA:new FormControl("",[Validators.email]),
    conA:new FormControl("",[Validators.minLength(8)])
  })

  async validAlert() {
    const alert = await this.alertC.create({
      header: 'Operación exitosa',
      message: 'Los datos han sido cambiados.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async correoEx() {
    const alert = await this.alertC.create({
      header: 'ERROR',
      message: 'El correo ingresado ya está registrado.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  guardarCambios(){
    this.bd.buscarA(this.datosNuevos.correoA).subscribe(resp => {
      let listString=JSON.stringify(resp)
      this.llegadaAPI=JSON.parse(listString)
      if(this.llegadaAPI.length>0){
        this.correoEx()
      }
      if((!this.validFormMod.get("corA")?.hasError("email") && this.datosNuevos.correoA.length>0) && this.llegadaAPI.length===0 && this.datosNuevos.contraA.length===0){
        this.userActivo.correoA=this.datosNuevos.correoA
        this.bd.actualizarUsuario(this.userActivo.id,this.userActivo).subscribe()
        this.iconomodificarC=1
        this.iconomodificarP=1
        this.validAlert()
        this.cardDatosDefault=0
        this.datosNuevos.correoA=""
        this.btnguardar=0
      }
      if((!this.validFormMod.get("conA")?.hasError("minlength") && this.datosNuevos.contraA.length>0) && this.datosNuevos.correoA.length===0){
        this.userActivo.contrasenaA=this.datosNuevos.contraA
        this.bd.actualizarUsuario(this.userActivo.id,this.userActivo).subscribe()
        this.iconomodificarC=1
        this.iconomodificarP=1
        this.validAlert()
        this.cardDatosDefault=0
        this.datosNuevos.contraA=""
        this.btnguardar=0
      }
      if((!this.validFormMod.get("corA")?.hasError("email") && this.datosNuevos.correoA.length>0) && (!this.validFormMod.get("conA")?.hasError("minlength") && this.datosNuevos.contraA.length>0) && this.llegadaAPI.length===0){
        this.userActivo.contrasenaA=this.datosNuevos.contraA
        this.userActivo.correoA=this.datosNuevos.correoA
        this.bd.actualizarUsuario(this.userActivo.id,this.userActivo).subscribe()
        this.iconomodificarC=1
        this.iconomodificarP=1
        this.validAlert()
        this.cardDatosDefault=0
        this.datosNuevos.contraA=""
        this.datosNuevos.correoA=""
        this.btnguardar=0
      }
    })
  }

  abrirMenu(){
    this.menuC.open('idmenu')
  }

  login_pages: app_pages[]=[
    {
      nombre:'Inicio',
      adressPage:'/inicio2',
      icon:'home'
    },
    {
      nombre:'Leer QR / Registrar asistencia',
      adressPage:'/leerqr',
      icon:'qr-code-outline'
    },
    {
      nombre:'Historial',
      adressPage:'/historial',
      icon:'bookmark-outline'
    },
  ]

  cerrarMenu(){
    this.menuC.close('menu-content');
  }

}
