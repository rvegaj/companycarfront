import {Component, Input, OnChanges, OnInit, Output} from '@angular/core';
import { EmployeeService} from '../services/employeeservice/employee.service';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  @Output()  employeeUpdate = new EventEmitter<any>();
  errorMessage = '';
  successMessage = '';
  employeesList: any[] = [];

  private employeeEdit: any;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  editEmployee(employee: any): void{
    this.employeeEdit = employee;
    this.employeeUpdate.emit(this.employeeEdit);
  }

  deleteEmployee(employee: any): void{
    console.log('Employee to delete:', JSON.stringify(employee));
    this.employeeService.deleteEmployee(employee.id).subscribe(
      (response) =>
      {
        console.log(response);
        this.successMessage = 'Empleado eliminado exitosamente';
        this.getEmployeeList();
      },
      (error) => {
        console.log(error);
        this.errorMessage = error.errorMessage;
      }
    );

  }
  getEmployees(): void {
    this.employeeService.getEmployeeList().subscribe(
      (data) => {
        this.employeesList = data;
      },
      (error) => {
        console.error('Error fetching employees:', error);
      }
    );
  }
  getEmployeeList(): void{
    this.employeeService.getEmployeeList().subscribe(
      (employeeList) => {
        this.employeesList = employeeList;
      }
    );
    this.employeeService.getEmployeeListUpdate().subscribe(
      (data) => {
        console.log('data.length', data.length);
        if (data.length !== 0) {
          this.employeesList = data;
        }
      }
    );
  }

}
