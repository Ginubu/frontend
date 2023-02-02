import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';
import { jwtM } from '../model/jwtModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly authUrl="https://backportfolio.onrender.com"
  
  constructor(private http:HttpClient) {
    console.log("auth inicialized...");
   }

   public IniciarSesion(creden:any):Observable<any>{
    return this.http.post<jwtM>(this.authUrl+"/login",creden);
   }
}
