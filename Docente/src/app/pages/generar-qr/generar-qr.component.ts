import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private authservice:AuthService, private data:DataService) { 
    this.authservice.getUserByEmail(this.correoActivo).subscribe(resp => {
      let listString=JSON.stringify(resp)
      this.llegadaAPI=JSON.parse(listString)
      this.respDocActivo=this.llegadaAPI[0]
    })
    this.data.cargarAsig().subscribe(resp => {
      let listString=JSON.stringify(resp)
      this.asignaturas=JSON.parse(listString)
      console.log(this.asignaturas)
    })
  }

  llegadaAPI=[]
  asignaturas=[]

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
        this.msjQr="http://localhost:3300/clases/"+resp.id
      })
      this.verqr=1
    }
  }

  cerrarqr(){
    this.verqr=0
  }

}
