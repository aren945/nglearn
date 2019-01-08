import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MainHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    const authReq = req.clone({
      headers: req.headers.set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
    });
    return next.handle(authReq);
  }
}
