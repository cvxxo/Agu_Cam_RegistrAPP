import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iDocente, iDocenteP, iAsig, igenerarQR } from '../interfaces/interfaces';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  urlApiD= "http://localhost:3300/docentes";
  urlApiA= "http://localhost:3300/asignaturas";
  urlApiF= "http://localhost:3300/fechasEvaluaciones";
  urlApiQRG="http://localhost:3300/clases";

  constructor(private http:HttpClient, private authservice:AuthService) { }

  crearDocente(newDocente: iDocente):Observable<iDocente>{
    return this.http.post<iDocenteP>(this.urlApiD, newDocente);
  }

  cargarAsig():Observable<iAsig>{
    return this.http.get<iAsig>(this.urlApiA);
  }

  cargarDocentes():Observable<iDocente>{
    return this.http.get<iDocente>(this.urlApiD);
  }

  cargarFechasEv(){
    return this.http.get(this.urlApiF)
  }

  actualizarUsuario(id:number,docente:iDocente):Observable<iDocente>{
    return this.http.put<iDocente>(this.urlApiD+"/"+id, docente)
  }

  obtenerAsigName(id:number):Observable<iAsig>{
    return this.http.get<iAsig>(this.urlApiA+"/"+id)
  }

  regQrGenerado(newQr:igenerarQR):Observable<igenerarQR>{
    return this.http.post<igenerarQR>(this.urlApiQRG, newQr)
  }
}
