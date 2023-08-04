import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
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

  deliveryCarInTrip(trip: any): Observable<any> {
    const data = JSON.parse(this.tokenStorageService.getToken()).token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${data}`
    });
    return  this.http.put(`${this.baseUrl}/${trip.employeeId.id}/${trip.carId.id}`, { headers });
  }

  findTripsByMonthAndYear(month: string, year: string): Observable<any>{
    const params = new HttpParams()
    .set('month', month)
    .set('year', year);

    const data = JSON.parse(this.tokenStorageService.getToken()).token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${data}`
    });
    return  this.http.get(`${this.baseUrl + '/delivery'}`, { params,  headers });
   }
 }
