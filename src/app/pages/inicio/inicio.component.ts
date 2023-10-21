import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(private router:Router, private dataservice:DataService) { }

  cerrarSesion(){
    sessionStorage.removeItem('nombre')
    this.router.navigateByUrl("/login-d")
  }

  nomDocente=sessionStorage.getItem('nombre')
  fechasE=[]

  apiFechasE(){
    this.dataservice.cargarFechasEv().subscribe(resp =>{
      let listString=JSON.stringify(resp)
      this.fechasE=JSON.parse(listString)
    })
  }
}
