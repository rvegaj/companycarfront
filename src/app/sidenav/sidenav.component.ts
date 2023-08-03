import { Component, OnInit } from '@angular/core';
import { CarModalComponent } from '../car-modal/car-modal.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  showSubMenuEmployee = false;
  showSubMenuCar = false;
  showSubMenuTrip = false;
  openModal(): void {
    this.bsModalRef = this.modalService.show(CarModalComponent);
  }
  toggleSubMenuEmployee(): void {
    this.showSubMenuEmployee = !this.showSubMenuEmployee;
  }
  toggleSubMenuCar(): void {
    this.showSubMenuCar = !this.showSubMenuCar;
  }
  toggleSubMenuTrip(): void {
    this.showSubMenuTrip = !this.showSubMenuTrip;
  }

  ngOnInit(): void {
  }

}
