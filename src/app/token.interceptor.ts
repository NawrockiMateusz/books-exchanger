import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const idToken = localStorage.getItem('id_token');
    if (idToken) {
      const modifiedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${idToken}`,
        },
      });
      return next.handle(modifiedRequest);
    } else {
      return next.handle(request);
    }
  }
}
