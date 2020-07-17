import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IJWT, ILoginResponse, IUser } from '@rly.gd/api-interfaces';
import * as jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly apiUrl = 'auth';

  constructor(private httpClient: HttpClient) {
  }

  get isLoggedIn(): boolean {
    return this.isTokenExpired();
  }

  get accessToken(): string {
    return localStorage.getItem('accessToken');
  }

  set accessToken(accessToken: string) {
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
    } else {
      localStorage.removeItem('accessToken');
    }
  }

  get decodedAccessToken(): IJWT {
    const token = this.accessToken;
    if (!token) {
      return null;
    }
    return jwtDecode<IJWT>(token);
  }

  get loggedInUser(): IUser {
    return this.decodedAccessToken?.user;
  }

  login(login: IUser): Observable<IUser> {
    return this.httpClient.post<ILoginResponse>(this.apiUrl + '/login', login)
      .pipe(map(loginResponse => this.mapToUser$(loginResponse)));
  }

  register(user: IUser): Observable<IUser> {
    return this.httpClient.post<ILoginResponse>(this.apiUrl + '/register', user)
      .pipe(map(loginResponse => this.mapToUser$(loginResponse)));
  }

  logout(): void {
    localStorage.removeItem('accessToken');
  }

  private mapToUser$(loginResponse: ILoginResponse): IUser {
    this.accessToken = loginResponse.accessToken;
    return this.loggedInUser;
  }

  private isTokenExpired(token: string = this.accessToken): boolean {
    if (!token) {
      return false;
    }
    try {
      const decodedToken: IJWT = jwtDecode(token);
      const now = new Date().getTime();
      return decodedToken.exp * 1000 > now;
    } catch {
      return false;
    }
  }
}
