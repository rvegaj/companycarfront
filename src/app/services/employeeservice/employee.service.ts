import { Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../../environments/environment';
import { TokenStorageService } from '../../services/loginservice/token-storage.service';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = environment._API_EMPLOYEE;
  private employeeListSubject = new BehaviorSubject<any[]>([]);

  private employees: any[] = [];
  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }
  getEmployeeList(): Observable<any> {
    const data = JSON.parse(this.tokenStorageService.getToken()).token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${data}`
    });
    return this.http.get(`${this.baseUrl}`, {headers});
  }

  createEmployee(employee: any): Observable<any> {
    const data = JSON.parse(this.tokenStorageService.getToken()).token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${data}`
    });
    return this.http.post(`${this.baseUrl}`, employee, { headers });
  }

  deleteEmployee(id: number): Observable<any> {
    const data = JSON.parse(this.tokenStorageService.getToken()).token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${data}`
    });
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text', headers });
  }

}
