import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { iDocenteP, igenerarQR } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.component.html',
  styleUrls: ['./generar-qr.component.css']
})
export class GenerarQRComponent {

  correoActivo=String(sessionStorage.getItem('correo'))

  constructor(private authservice:AuthService, private data:DataService, private router:Router) { 
    this.authservice.getUserByEmail(this.correoActivo).subscribe(resp => {
      let listString=JSON.stringify(resp)
      this.llegadaAPI=JSON.parse(listString)
      this.respDocActivo=this.llegadaAPI[0]
      this.data.obtenerAsigName(this.respDocActivo.idAsignatura1).subscribe(resp => {
        this.asignaturas.asig1=resp.nombre
      })
      this.data.obtenerAsigName(this.respDocActivo.idAsignatura2).subscribe(resp => {
        this.asignaturas.asig2=resp.nombre
      })
    })
    /*this.data.cargarAsig().subscribe(resp => {
      let listString=JSON.stringify(resp)
      this.asignaturas=JSON.parse(listString)
      console.log(this.asignaturas)
    })*/
  }

  llegadaAPI=[]
  asignaturas={
    asig1:"",
    asig2:""
  }

  respDocActivo:iDocenteP={
    id:0,
    correo:"",
    nombre:"",
    apellido:"",
    contrasena:"",
    idAsignatura1:0,
    idAsignatura2:0
  }

  validFormGQR=new FormGroup({
    asiQr:new FormControl("", [Validators.required]),
    fecQr:new FormControl("", [Validators.required])
  })

  paraGenQR:igenerarQR={
    id:0,
    nomYApeD:"",
    correoD:this.correoActivo,
    fecha:"",
    asignatura:""
  }

  verqr=0
  msjQr=""

  generarQR(){
    this.paraGenQR.nomYApeD=this.respDocActivo.nombre+" "+this.respDocActivo.apellido
    if(this.validFormGQR.valid){
      this.data.regQrGenerado(this.paraGenQR).subscribe(resp => {
        console.log(resp)
        this.msjQr=String(resp.id)
        this.verqr=1
      })
    }
  }

  mostrarQr(){
    this.verqr=1
  }

  cerrarqr(){
    this.verqr=2
  }

  cerrarSesion(){
    sessionStorage.removeItem('nombre')
    this.router.navigateByUrl("/login-d")
  }

  fechasE=[]
  mostrarFechas=0
  apiFechasE(){
    this.data.cargarFechasEv().subscribe(resp =>{
      let listString=JSON.stringify(resp)
      this.fechasE=JSON.parse(listString)
      this.mostrarFechas=1
    })
  }
  cerrarFechas(){
    this.mostrarFechas=0
  }

}
