import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../../environments/environment';
import { TokenStorageService} from './token-storage.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  pathApi = environment._API_AUTENTHICATE;
  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.pathApi, {
      username,
      password
    }, httpOptions);
  }
  public getAuthenticated(): any {
    return this.tokenStorageService.getAuthenticated();
  }



}
