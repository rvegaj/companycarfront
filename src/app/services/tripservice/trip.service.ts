import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenStorageService} from '../loginservice/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  baseUrl = environment._API_TRIP;
  private trips: any[] = [];
  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }
  getTripsList(): Observable<any> {
    const data = JSON.parse(this.tokenStorageService.getToken()).token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${data}`
    });
    return this.http.get(`${this.baseUrl}`, {headers});
  }

  createTrip(trip: any): Observable<any> {
    const data = JSON.parse(this.tokenStorageService.getToken()).token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${data}`
    });
    return this.http.post(`${this.baseUrl}/${trip.employeeId}/${trip.carId}`, { headers });
  }

  deleteTrip(id: number): Observable<any> {
    const data = JSON.parse(this.tokenStorageService.getToken()).token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${data}`
    });
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text', headers });
  }
}
