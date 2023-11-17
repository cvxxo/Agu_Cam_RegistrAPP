import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { ialumnosPresentes, ialumnosPresentesId, igenerarQR } from 'src/app/interfaces/interfaces';
import { BaseDeDatosService } from 'src/app/services/base-de-datos.service';

@Component({
  selector: 'app-leerqr',
  templateUrl: './leerqr.page.html',
  styleUrls: ['./leerqr.page.scss'],
})

export class LeerqrPage implements OnInit {

  constructor(private dataBase:BaseDeDatosService) { }

  msjQR=""

  ngOnInit() {
    this.startScan()
  }

  obtenerClase:igenerarQR={
    id:0,
    nomYApeD:"",
    correoD:"",
    fecha:"",
    asignatura:""
  }

  alumnosPresentes:ialumnosPresentes={
    idClase:0,
    nomYApe:String(sessionStorage.getItem("nomYApeA")),
    correoA:String(sessionStorage.getItem("correoA")),
    asignatura:"",
    fecha:""
  }

  async startScan(){
    // Check camera permission
    // This is just a simple example, check out the better checks below
    await BarcodeScanner.checkPermission({ force: true });
  
    // make background of WebView transparent
    // note: if you are using ionic this might not be enough, check below
    BarcodeScanner.hideBackground();
    document.querySelector('body')?.classList.add('scanner-active')
    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result
    // if the result has content
    if (result.hasContent) {
      console.log(result.content); // log the raw scanned content
      document.querySelector('body')?.classList.remove('scanner-active');
      this.msjQR=result.content
      this.dataBase.obtenerClase(this.msjQR).subscribe(resp => {
        this.obtenerClase=resp
        console.log(this.obtenerClase)
        this.alumnosPresentes.idClase=resp.id
        this.alumnosPresentes.asignatura=resp.asignatura
        this.alumnosPresentes.fecha=resp.fecha
        console.log(this.alumnosPresentes)
        this.dataBase.ingAlumnoPresente(this.alumnosPresentes).subscribe()
      })
    }
  }

  stopScan(){
    document.querySelector('body')?.classList.remove('scanner-active');
    BarcodeScanner.showBackground()
    BarcodeScanner.stopScan()
  }

}
