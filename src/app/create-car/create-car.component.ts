import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car';
import { CarserviceService} from '../services/carservice/carservice.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  constructor(private carService: CarserviceService) { }

  errorMessage = '';
  successMessage = '';
  isErrorSave = false;

  car: Car = new Car();
  carList: any[];
  carRetirementList: any[];
  submitted = false;

  createCar(): void{
    this.carService.createCar(this.car).subscribe(
      (response) =>
      {
        console.log(response);
        this.successMessage = 'Carro creado exitosamente!';
      },
      (error) => {
        console.log(error);
        this.errorMessage = error.errorMessage;
        this.isErrorSave = true;
        return this.errorMessage;
      }
    );
    this.carService.setCarListUpdate(this.carList);
    this.car = new Car();
  }
  updateCar(car: any): void{
    this.car = car;
  }
  getCars(): void {
    this.carService.getCarList().subscribe(
      (data) => {
        this.carList = data;
      },
      (error) => {
        console.error('Error obteniendo los empleados:', error);
      }
    );
  }
  getCarsRetirements(): void {
    this.carService.getCarsRetirements().subscribe(
      (data) => {
        this.carRetirementList = data;
      },
      (error) => {
        console.error('Error consultando carros en uso:', error);
      }
    );
  }

  ngOnInit(): void {
    this.getCars();
  }



}
