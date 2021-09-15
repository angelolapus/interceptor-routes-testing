import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class InterceptorTesting implements  HttpInterceptor{

  constructor(private authService: AuthService){

  }

  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
    //Just trying to inspect each api calls and inject random token for testing purposes.
    const token = this.authService.getToken();
    const autReq = req.clone({
      headers: req.headers.set('Authorization', token)
    })
    console.log('intercept: ', autReq, next)
    return next.handle(autReq);
  }
}
