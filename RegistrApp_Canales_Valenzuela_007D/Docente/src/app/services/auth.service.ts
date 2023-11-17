import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iDocente, iDocenteP } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  getUserByEmail(email:string):Observable<iDocente>{
    return this.http.get<iDocente>(environment.urlApiDxE+`${email}`);
  }

  isLoggedIn(){
    return sessionStorage.getItem('nombre')!=null;
  }
}
