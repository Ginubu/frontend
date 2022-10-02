import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient} from '@angular/common/http';
import { Route, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uri = 'https://localhost:300/api';
  token;
  constructor(private http: HttpClient, private router: Router) { }

  logIn(email: string, password: string)
   {
    this.http.post(this.uri + '/authtenticate', {email: email,password: password})
    .subscribe(
            (resp: any) => 
                {
              ///redireccionamos al usuario a su perfil
              this.router.navigate(['profile']);
                //guardamos el token en localStorage
                localStorage.setItem('auth_token', resp.token);
                }
              )
  }    

  logout() 
  {
    localStorage.removeItem('auth_token');
  }

  //servicio que verifica si existe la secion
  public get logIn(): boolean {
    return (localStorage.getItem('auth_token') == null)
  }
}
