import { Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../../environments/environment';
import { TokenStorageService } from '../../services/loginservice/token-storage.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarserviceService {
  baseUrl = environment._API_CAR;
  pathRetirement = '/retirement';
  private carListSubject = new BehaviorSubject<any[]>([]);

  private cars: any[] = [];
  private carEdit: any;
  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }
  getCarList(): Observable<any> {
    const data = JSON.parse(this.tokenStorageService.getToken()).token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${data}`
    });
    return this.http.get(`${this.baseUrl}`, {headers});
  }

  getCarsRetirements(): Observable<any> {
    const data = JSON.parse(this.tokenStorageService.getToken()).token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${data}`
    });
    return this.http.get(`${this.baseUrl}` + this.pathRetirement, {headers});
  }

  createCar(car: any): Observable<any> {
    const data = JSON.parse(this.tokenStorageService.getToken()).token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${data}`
    });
    return this.http.post(`${this.baseUrl}`, car, { headers });
  }

  deleteCar(id: number): Observable<any> {
    const data = JSON.parse(this.tokenStorageService.getToken()).token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${data}`
    });
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text', headers });
  }

}
