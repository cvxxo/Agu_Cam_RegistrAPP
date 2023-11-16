import { Injectable } from '@angular/core';
import { iAlumnos, iAlumnosId } from '../interfaces/interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseDeDatosService {

  constructor(private http:HttpClient) { }

  urlApiA="http://192.168.0.150:3300/alumnos/";
  urlApiBuscarA="http://192.168.0.150:3300/alumnos/?correoA="

  crearAlumno(newAlumno: iAlumnos):Observable<iAlumnos>{
    return this.http.post<iAlumnosId>(this.urlApiA, newAlumno);
  }

  buscarA(correoA:String):Observable<iAlumnosId>{
    return this.http.get<iAlumnosId>(this.urlApiBuscarA+correoA)
  }

  buscarAid(id:String):Observable<iAlumnosId>{
    return this.http.get<iAlumnosId>(this.urlApiA+id)
  }

  actualizarUsuario(id:number,docente:iAlumnosId):Observable<iAlumnosId>{
    return this.http.put<iAlumnosId>(this.urlApiA+id, docente)
  }

}
