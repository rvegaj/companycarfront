import { Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../../environments/environment';
import { TokenStorageService } from '../../services/loginservice/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CarserviceService {
  baseUrl = environment._API_CAR;
  pathRetirement = '/retirement';
  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }
  getCarList(): Observable<any> {
    const headers: HttpHeaders = this.tokenStorageService.getHeaders();
    return this.http.get(`${this.baseUrl}`, {headers});
  }

  getCarsRetirements(): Observable<any> {
    const headers: HttpHeaders = this.tokenStorageService.getHeaders();
    return this.http.get(`${this.baseUrl}` + this.pathRetirement, {headers});
  }

  createCar(car: any): Observable<any> {
    const headers: HttpHeaders = this.tokenStorageService.getHeaders();
    return this.http.post(`${this.baseUrl}`, car, { headers });
  }

  deleteCar(id: number): Observable<any> {
    const headers: HttpHeaders = this.tokenStorageService.getHeaders();
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text', headers });
  }

}
