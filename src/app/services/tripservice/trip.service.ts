import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {TokenStorageService} from '../loginservice/token-storage.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  baseUrl = environment._API_TRIP;
  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }
  getTripsList(): Observable<any> {
    const headers: HttpHeaders = this.tokenStorageService.getHeaders();
    return this.http.get(`${this.baseUrl}`, {headers});
  }

  createTrip(trip: any): Observable<any> {
    const headers: HttpHeaders = this.tokenStorageService.getHeaders();
    return this.http.post(`${this.baseUrl}/${trip.employeeId}/${trip.carId}`, { headers });
  }

  deliveryCarInTrip(trip: any): Observable<any> {
    const headers: HttpHeaders = this.tokenStorageService.getHeaders();
    return  this.http.put(`${this.baseUrl}/${trip.employeeId.id}/${trip.carId.id}`, { headers });
  }

  findTripsByMonthAndYear(month: string, year: string): Observable<any>{
    const params = new HttpParams()
    .set('month', month)
    .set('year', year);
    const headers: HttpHeaders = this.tokenStorageService.getHeaders();
    return  this.http.get(`${this.baseUrl + '/delivery'}`, { params,  headers });
   }
 }
