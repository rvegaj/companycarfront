import {Component, Input, OnInit} from '@angular/core';
import { EmployeeService } from '../services/employeeservice/employee.service';
import { TripService} from '../services/tripservice/trip.service';
import { CarserviceService} from '../services/carservice/carservice.service';
import Swal from 'sweetalert2';
import {Trip} from '../model/trip';
import {Car} from '../model/car';
@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})

export class CreateTripComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private tripService: TripService, private carserviceService: CarserviceService) { }
  errorMessage = '';
  successMessage = '';
  selectedEmployeeId: any = null;
  selectedCarId: any = null;
  trip: Trip = new Trip();
  tripList: any[];

  employeeList: any[];
  carsList: Car[];

  createTrip(): void{
    this.trip.employeeId = this.selectedEmployeeId;
    this.trip.carId = this.selectedCarId;
    this.tripService.createTrip(this.trip).subscribe(
    (response) =>
      {
        console.log(response);
        if (!this.trip.id) {
          this.successMessage = 'Viaje creado exitosamente!';
        }
        else {
          this.successMessage = 'Empleado actualizado exitosamente!';
        }
        Swal.fire(this.successMessage);
        console.log('Creado');
        this.getTrips();
      },
      (error) => {
        console.log(error.error);
        Swal.fire(error.error.message);
      }
    );
    this.trip = new Trip();
  }
  updateTrip(trip: any): void{
    this.trip = trip;
    console.log('trip', trip);
  }
  ngOnInit(): void {
    this.getCars();
    this.getEmployees();
    this.isFormValid();
  }

  getTrips(): void {
    this.tripService.getTripsList().subscribe(
      (data) => {
        this.tripList = data;
      },
      (error) => {
        console.error('Error fetching employees:', error);
      }
    );
  }

  getCars(): void {
    this.carserviceService.getCarList().subscribe(
      (data) => {
        this.carsList = data;
      },
      (error) => {
        console.error('Error fetching employees:', error);
      }
    );
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
  isFormValid(): boolean {
    return this.selectedEmployeeId !== null && this.selectedCarId !== null;
  }


}
