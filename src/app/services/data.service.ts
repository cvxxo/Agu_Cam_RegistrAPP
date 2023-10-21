import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iDocente, iDocenteP, iAsig } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  urlApiD= "http://localhost:3300/docentes";
  urlApiA= "http://localhost:3300/asignaturas";

  constructor(private http:HttpClient) { }

  crearDocente(newDocente: iDocente):Observable<iDocente>{
    return this.http.post<iDocenteP>(this.urlApiD, newDocente);
  }

  cargarAsig():Observable<iAsig>{
    return this.http.get<iAsig>(this.urlApiA);
  }

  cargarDocentes():Observable<iDocente>{
    return this.http.get<iDocente>(this.urlApiD);
  }
}
