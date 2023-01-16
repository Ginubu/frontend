import { Injectable } from '@angular/core';
import { HttpEvent,HttpHandler,HttpInterceptor,HttpRequest } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private token:TokenService){}

  intercept(req: HttpRequest<any>, next: HttpHandler,): Observable<HttpEvent<any>> {
    if (this.token.getToken() != null){
      return next.handle(req.clone(
        {headers: req.headers.set("Authorization","Bearer" + this.token.getToken()}
      ));
    }
    return next.handle(req);
   }
}
