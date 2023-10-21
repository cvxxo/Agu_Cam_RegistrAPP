import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { iDocente } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro-d',
  templateUrl: './registro-d.component.html',
  styleUrls: ['./registro-d.component.css']
})
export class RegistroDComponent implements OnInit {
  ngOnInit(){
    this.cargarAsig2();
  }

  valFormReg= new FormGroup({
    corD : new FormControl('',[Validators.required, Validators.email]),
    nomD : new FormControl('',[Validators.required, Validators.maxLength(20),Validators.minLength(3)]),
    apeD : new FormControl('',[Validators.required, Validators.maxLength(20),Validators.minLength(3)]),
    conD : new FormControl('',[Validators.required, Validators.maxLength(20),Validators.minLength(8)]),
    ida1 : new FormControl('',[Validators.required, Validators.min(1)]),
    ida2 : new FormControl('',[Validators.required, Validators.min(1)])
  })

  newDocente: iDocente={
    correo:"",
    nombre:"",
    apellido:"",
    contrasena:"",
    idAsignatura1:0,
    idAsignatura2:0
  }

  asignaturas=[]
  docenteReg=[]

  constructor(private data: DataService, private authservice:AuthService) {}

  crearDocente2(){
    this.authservice.getUserByEmail(this.newDocente.correo).subscribe(resp => {
      let listString=JSON.stringify(resp)
      this.docenteReg=JSON.parse(listString)
      console.log(this.docenteReg.length)
      console.log(this.docenteReg)
      if(this.valFormReg.valid && this.docenteReg.length===0){
        console.log(this.newDocente)
        this.data.crearDocente(this.newDocente).subscribe()
      }
    })
  }

  cargarAsig2(){
    this.data.cargarAsig().subscribe(
      {
        next: resp=>{
          let listString=JSON.stringify(resp)
          this.asignaturas=JSON.parse(listString)
          console.log(this.asignaturas)
        }
      }
    )  
  }
}
