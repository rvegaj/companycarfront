import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const AUTHENTICATED = 'Authenticated';
const LIST_KEY = 'LIST_PROPS_EMPLOYEE';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  signOut(): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(USER_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    window.sessionStorage.setItem(AUTHENTICATED, String(true));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
  public getAuthenticated(): any {
    return window.sessionStorage.getItem(AUTHENTICATED);
  }

  public getHeaders(): HttpHeaders{
    const data = JSON.parse(this.getToken()).token;
    return new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${data}`);
  }
}
