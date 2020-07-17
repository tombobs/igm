import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class IgmHttpInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.url.startsWith('./')) {
      return next.handle(request);
    }

    const url = environment.apiUrl + request.url;
    const headers = request.headers.append('Authorization', 'Bearer '
      + localStorage.getItem('accessToken'));

    request = request.clone({ url, headers });
    return next.handle(request).pipe(catchError((e) => {
      if (e instanceof HttpErrorResponse) {
        if (e.status === 401) {
          this.router.navigateByUrl('/login');
        }
      }
      return of(e);
    }));
  }

  constructor(private router: Router) {
  }
}
