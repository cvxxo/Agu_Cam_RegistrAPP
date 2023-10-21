import { Component } from '@angular/core';
import { iDocenteP } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-d',
  templateUrl: './login-d.component.html',
  styleUrls: ['./login-d.component.css']
})
export class LoginDComponent {

  constructor(private authservice:AuthService, private router:Router){}

  sendLogin={
    correo:"",
    contrasena:""
  }

  respArray=[/*{
    id:0,
    correo:"",
    nombre:"",
    apellido:"",
    contrasena:"",
    idAsignatura1:0,
  idAsignatura2:0}*/]

  respObject:iDocenteP={
    id:0,
    correo:"",
    nombre:"",
    apellido:"",
    contrasena:"",
    idAsignatura1:0,
    idAsignatura2:0
  }

  mostrarmsj=0

  login(){
    this.authservice.getUserByEmail(this.sendLogin.correo).subscribe(resp => {
      console.log(resp)
      let listString=JSON.stringify(resp)
      this.respArray=JSON.parse(listString)
      if(this.respArray.length===0){
        this.mostrarmsj=1
      }
      if(this.respArray.length===1){
        this.mostrarmsj=0
        this.respObject=this.respArray[0]
        if(this.respObject.correo===this.sendLogin.correo && this.respObject.contrasena===this.sendLogin.contrasena){
          this.router.navigateByUrl("/inicio")
        }
      }


      /*else{console.log(this.respArray[0])
        this.respObject=this.respArray[0]
      }
      console.log(this.respArray[0])
      this.respObject=this.respArray[0]
      //console.log(this.respObject.correo)
      if(this.respObject.correo===this.sendLogin.correo && this.respObject.contrasena===this.sendLogin.contrasena){
        this.router.navigateByUrl("/inicio")
      }*/
    })
  }
}
