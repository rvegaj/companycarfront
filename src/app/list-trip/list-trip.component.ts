import {Component, Input, OnChanges, OnInit, Output} from '@angular/core';
import { EmployeeService} from '../services/employeeservice/employee.service';
import {EventEmitter} from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-trip',
  templateUrl: './list-trip.component.html',
  styleUrls: ['./list-trip.component.css']
})
export class ListTripComponent implements OnInit {
  @Output()  employeeUpdate = new EventEmitter<any>();
  @Output()  refreshEmployee = new EventEmitter<any>();
  @Input() employeesInputList: any[];
  errorMessage = '';
  successMessage = '';
  employeesList: any[] = [];

  private employeeEdit: any;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  editEmployee(employee: any): void{
    this.employeeEdit = employee;
    this.employeeUpdate.emit(this.employeeEdit);
  }

  deleteEmployee(employee: any): void{
    this.employeeService.deleteEmployee(employee.id).subscribe(
      (response) =>
      {
        console.log(response);
        this.successMessage = 'Empleado eliminado exitosamente';
        this.refreshEmployee.emit();
      },
      (error) => {
        console.log(error.error);
        const response = JSON.parse(error.error);
        Swal.fire(response.message);
      }
    );

  }

}
