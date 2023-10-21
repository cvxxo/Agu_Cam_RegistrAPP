import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iDocente, iDocenteP } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlApiD= "http://localhost:3300/docentes/?correo=";

  constructor(private http:HttpClient) { }

  getUserByEmail(email:string):Observable<iDocente>{
    return this.http.get<iDocente>(this.urlApiD+`${email}`);
  }
}
