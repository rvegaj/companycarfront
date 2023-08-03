import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../model/employee';
import { EmployeeService } from '../services/employeeservice/employee.service';
import Swal from 'sweetalert2';
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
        if (!this.employee.id) {
          this.successMessage = 'Empleado creado exitosamente!';
        }
        else {
          this.successMessage = 'Empleado actualizado exitosamente!';
        }
        Swal.fire(this.successMessage);
        console.log('Creado');
        this.getEmployees();
      },
      (error) => {
        console.log(error.error);
        const response = JSON.parse(error.error);
        Swal.fire(response.message);
      }
    );
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
        console.error('Error al consultar los empleados:', error);
        console.log(error.error);
        const response = JSON.parse(error.error);
        Swal.fire(response.message);
      }
    );
  }


}
