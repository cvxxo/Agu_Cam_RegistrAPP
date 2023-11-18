import { Injectable } from '@angular/core';
import { iAlumnos, iAlumnosId, ialumnosPresentes, ialumnosPresentesId, igenerarQR } from '../interfaces/interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseDeDatosService {

  constructor(private http:HttpClient) { }

  crearAlumno(newAlumno: iAlumnos):Observable<iAlumnos>{
    return this.http.post<iAlumnosId>(environment.ApiA, newAlumno);
  }

  buscarA(correoA:String):Observable<iAlumnosId>{
    return this.http.get<iAlumnosId>(environment.ApiBuscarAxEmail+correoA)
  }

  buscarAid(id:String):Observable<iAlumnosId>{
    return this.http.get<iAlumnosId>(environment.ApiA+id)
  }

  actualizarUsuario(id:number,docente:iAlumnosId):Observable<iAlumnosId>{
    return this.http.put<iAlumnosId>(environment.ApiA+id, docente)
  }

  obtenerClase(id:string):Observable<igenerarQR>{
    return this.http.get<igenerarQR>(environment.ApiClases+id)
  }

  ingAlumnoPresente(registro:ialumnosPresentes):Observable<ialumnosPresentes>{
    return this.http.post<ialumnosPresentesId>(environment.ApiAlumnosP, registro)
  }

  obtenerHist(correoA:string){
    return this.http.get(environment.ApiObtHist+correoA)
  }

}
