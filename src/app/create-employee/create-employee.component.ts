import {Component, OnInit} from '@angular/core';
import {Employee} from '../model/employee';
import { EmployeeService } from '../services/employeeservice/employee.service';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})

export class CreateEmployeeComponent implements OnInit {
  constructor(private employeeService: EmployeeService) { }
  errorMessage = '';
  successMessage = '';
  isErrorSave = false;

  employee: Employee = new Employee();
  employeeList: any[];
  submitted = false;

  createEmployee(): void{
    this.employeeService.createEmployee(this.employee).subscribe(
    (response) =>
      {
        console.log(response);
        this.successMessage = 'Empleado creado exitosamente!';
      },
      (error) => {
        console.log(error);
        this.errorMessage = error.errorMessage;
        this.isErrorSave = true;
        return this.errorMessage;
      }
    );
    this.employeeService.setEmployeeListUpdate(this.employeeList);
    this.employee = new Employee();
  }
  updateEmployee(employee: any): void{
    this.employee = employee;
    console.log('employee', employee);
  }
  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployeeList().subscribe(
      (data) => {
        this.employeeList = data;
      },
      (error) => {
        console.error('Error fetching employees:', error);
      }
    );
  }


}
