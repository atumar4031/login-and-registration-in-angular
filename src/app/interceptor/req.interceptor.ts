import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from '../session/session.service';

@Injectable()
export class ReqInterceptor implements HttpInterceptor {

  constructor(private sessionService: SessionService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(!request.url.includes("/auth")){
      const newRequest = request.clone({
        headers: new HttpHeaders({authorization: `Bearer ${this.sessionService.accessToken}`})
      });
      return next.handle(newRequest);
    }
    return next.handle(request);
  }
}
