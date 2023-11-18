import { Component, OnInit } from '@angular/core';
import { BaseDeDatosService } from 'src/app/services/base-de-datos.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  constructor(private dataB:BaseDeDatosService) { }

  ngOnInit() {
    this.dataB.obtenerHist(String(sessionStorage.getItem("correoA"))).subscribe(resp => {
      let stringify = JSON.stringify(resp)
      this.historial = JSON.parse(stringify)
    })
  }

  historial=[]

}
