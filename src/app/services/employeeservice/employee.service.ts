import { Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../../environments/environment';
import { TokenStorageService } from '../../services/loginservice/token-storage.service';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = environment._API_EMPLOYEE;
  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) {
  }
  getEmployeeList(): Observable<any> {
    const headers: HttpHeaders = this.tokenStorageService.getHeaders();
    return this.http.get(`${this.baseUrl}`, {headers});
  }

  createEmployee(employee: any): Observable<any> {
    const headers: HttpHeaders = this.tokenStorageService.getHeaders();
    return this.http.post(`${this.baseUrl}`, employee, { headers });
  }

  deleteEmployee(id: number): Observable<any> {
    const headers: HttpHeaders = this.tokenStorageService.getHeaders();
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text', headers });
  }

}
