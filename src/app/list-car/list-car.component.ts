import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CarserviceService} from '../services/carservice/carservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {
  @Output()  carUpdate = new EventEmitter<any>();
  @Output()  refreshCar = new EventEmitter<any>();
  @Input() carsInputList: any[];
  errorMessage = '';
  successMessage = '';
  private carEdit: any;
  constructor(private carService: CarserviceService) { }

  ngOnInit(): void {
  }

  editCar(car: any): void{
    this.carEdit = car;
    this.carUpdate.emit(this.carEdit);
  }

  deleteCar(car: any): void{
    this.carService.deleteCar(car.id).subscribe(
      (response) =>
      {
        console.log(response);
        this.successMessage = 'Carro eliminado exitosamente';
        this.refreshCar.emit();
        Swal.fire(this.successMessage);
      },
      (error) => {
        console.log(error);
        const response = JSON.parse(error.error);
        Swal.fire(response.message);
      }
    );

  }

}
