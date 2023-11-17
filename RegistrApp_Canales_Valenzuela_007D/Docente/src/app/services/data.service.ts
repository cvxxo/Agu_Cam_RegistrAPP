import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iDocente, iDocenteP, iAsig, igenerarQR } from '../interfaces/interfaces';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http:HttpClient, private authservice:AuthService) { }

  crearDocente(newDocente: iDocente):Observable<iDocente>{
    return this.http.post<iDocenteP>(environment.urlApiD, newDocente);
  }

  cargarAsig():Observable<iAsig>{
    return this.http.get<iAsig>(environment.urlApiA);
  }

  cargarDocentes():Observable<iDocente>{
    return this.http.get<iDocente>(environment.urlApiD);
  }

  cargarFechasEv(){
    return this.http.get(environment.urlApiF)
  }

  actualizarUsuario(id:number,docente:iDocente):Observable<iDocente>{
    return this.http.put<iDocente>(environment.urlApiD+"/"+id, docente)
  }

  obtenerAsigName(id:number):Observable<iAsig>{
    return this.http.get<iAsig>(environment.urlApiA+"/"+id)
  }

  regQrGenerado(newQr:igenerarQR):Observable<igenerarQR>{
    return this.http.post<igenerarQR>(environment.urlApiQRG, newQr)
  }
}
