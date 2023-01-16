import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../iPersona';
import { HeaderComponent } from '../components/header/header.component';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  url:string='https://backportfolio.onrender.com/'
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>
  {
    return this.http.get<any>('./assets/json-prueba/jsonP.json');
  }
  obtenerDatosDB():Observable<any>
  {
   
    return this.http.get<any>(this.url+"ver/personas");
  }
}
