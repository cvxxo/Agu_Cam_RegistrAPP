import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/services/auth.service';
import { iAsig, iDocenteP } from 'src/app/interfaces/interfaces';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  correoActivo=String(sessionStorage.getItem('correo'))

  nombreAsig1=""
  nombreAsig2=""

  accederAsig:iAsig={
    id:0,
    nombre:"",
    seccion:"",
    año:0,
    semestre:0,
    horas_sem:0
  }
  
  constructor(private router:Router, private dataservice:DataService, private authservice:AuthService) { 
    this.authservice.getUserByEmail(this.correoActivo).subscribe(resp => {
      let listString=JSON.stringify(resp)
      this.llegadaAPI=JSON.parse(listString)
      this.respDocActivo=this.llegadaAPI[0]
      this.dataservice.obtenerAsigName(this.respDocActivo.idAsignatura1).subscribe(resp => {
        console.log(resp.nombre)
        this.nombreAsig1=resp.nombre
      })
      this.dataservice.obtenerAsigName(this.respDocActivo.idAsignatura2).subscribe(resp => {
        console.log(resp.nombre)
        this.nombreAsig2=resp.nombre
      })
    })
  }

  cerrarSesion(){
    sessionStorage.removeItem('nombre')
    this.router.navigateByUrl("/login-d")
  }

  nomDocente=sessionStorage.getItem('nombre') //Bienvendio {{nomDocente}}

  fechasE=[]
  mostrarFechas=0
  apiFechasE(){
    this.dataservice.cargarFechasEv().subscribe(resp =>{
      let listString=JSON.stringify(resp)
      this.fechasE=JSON.parse(listString)
      this.mostrarFechas=1
    })
  }
  cerrarFechas(){
    this.mostrarFechas=0
  }

  ValidPut=new FormGroup({
    corD:new FormControl("",[Validators.email, Validators.required]),
    conD:new FormControl("",[Validators.minLength(8), Validators.required])
  })

  llegadaAPI=[]

  respDocActivo:iDocenteP={
    id:0,
    correo:"",
    nombre:"",
    apellido:"",
    contrasena:"",
    idAsignatura1:0,
    idAsignatura2:0
  }

  nuevosDatos={
    correoNuevo:"",
    contraNueva:""
  }

  showInputPutCorreo=0
  showInputPutContra=0

  modificarCorreo(){
    this.showInputPutCorreo=1
  }
  modificarContra(){
    this.showInputPutContra=1
  }

  alertExito=0

  llegadaAsig=[]

  confirmCambio(){
    this.authservice.getUserByEmail(this.nuevosDatos.correoNuevo).subscribe(resp => {
      let listString=JSON.stringify(resp)
      this.llegadaAPI=JSON.parse(listString)
      if(this.llegadaAPI.length===0 && this.ValidPut.get('corD')?.valid && this.showInputPutCorreo===1){
        this.respDocActivo.correo=this.nuevosDatos.correoNuevo
        this.dataservice.actualizarUsuario(this.respDocActivo.id,this.respDocActivo).subscribe()
        sessionStorage.setItem('correo', this.nuevosDatos.correoNuevo)
        this.alertExito=1
      }
      else if(this.ValidPut.get('conD')?.valid && this.showInputPutContra===1){
        this.respDocActivo.contrasena=this.nuevosDatos.contraNueva
        this.dataservice.actualizarUsuario(this.respDocActivo.id,this.respDocActivo).subscribe()
        this.alertExito=2
      }
    })
  }

  vercontra=0
  verContraFunction(){
    this.vercontra=1
  }
  esconderContraFunction(){
    this.vercontra=0
  }

  

}
