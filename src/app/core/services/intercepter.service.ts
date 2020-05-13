import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BackendInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const token = localStorage.getItem('token');
    console.log('local storage token::', token);


    if (token) {
      request = request.clone({
        setHeaders: {
          // 'Access-Control-Allow-Origin': '*',
          'Authorization': 'Bearer ' + token
        }
      });
    }
    else {
      request = request.clone({
        setHeaders: {
          // 'Access-Control-Allow-Origin': '*'
        }
      });
    }

    return next.handle(request);
  }
}
