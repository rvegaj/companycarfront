import {Component, OnInit} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CarserviceService} from '../services/carservice/carservice.service';

@Component({
  selector: 'app-car-modal',
  templateUrl: './car-modal.component.html',
  styleUrls: ['./car-modal.component.css']
})
export class CarModalComponent implements OnInit {
  constructor(public bsModalRef: BsModalRef, private carserviceService: CarserviceService) { }
  countCarsRetirement: any;
  close(): void {
    this.bsModalRef.hide();
  }
  ngOnInit(): void {
    this.getCarsRetirements();
  }

  getCarsRetirements(): any {
    this.carserviceService.getCarsRetirements().subscribe(
      (data) => {
        this.countCarsRetirement = data.length;
      },
      (error) => {
        console.error('Error obteniendo los empleados:', error);
      }
    );
  }
}
