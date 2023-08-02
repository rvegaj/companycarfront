import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CarserviceService} from '../services/carservice/carservice.service';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {
  @Output()  carUpdate = new EventEmitter<any>();
  errorMessage = '';
  successMessage = '';
  carsList: any[] = [];

  private carEdit: any;
  constructor(private carService: CarserviceService) { }

  ngOnInit(): void {
    this.getCarList();
  }

  editCar(car: any): void{
    this.carEdit = car;
    this.carUpdate.emit(this.carEdit);
  }

  deleteCar(car: any): void{
    console.log('Employee to delete:', JSON.stringify(car));
    this.carService.deleteCar(car.id).subscribe(
      (response) =>
      {
        console.log(response);
        this.successMessage = 'Carro eliminado exitosamente';
        this.getCarList();
      },
      (error) => {
        console.log(error);
        this.errorMessage = error.errorMessage;
      }
    );

  }
  getCars(): void {
    this.carService.getCarList().subscribe(
      (data) => {
        this.carsList = data;
      },
      (error) => {
        console.error('Error al consultar los carros:', error);
      }
    );
  }
  getCarList(): void{
    this.carService.getCarList().subscribe(
      (carList) => {
        this.carsList = carList;
      }
    );
    this.carService.getCarListUpdate().subscribe(
      (data) => {
        console.log('data.length', data.length);
        if (data.length !== 0) {
          this.carsList = data;
        }
      }
    );
  }


}
