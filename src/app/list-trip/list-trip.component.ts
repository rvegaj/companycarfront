import {Component, Input, OnChanges, OnInit, Output} from '@angular/core';
import { TripService } from '../services/tripservice/trip.service';
import {EventEmitter} from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-trip',
  templateUrl: './list-trip.component.html',
  styleUrls: ['./list-trip.component.css']
})
export class ListTripComponent implements OnInit {
  @Output() tripUpdate = new EventEmitter<any>();
  @Output() refreshTrip = new EventEmitter<any>();
  @Input() tripsInputList: any[];
  errorMessage = '';
  successMessage = '';
  constructor(private tripService: TripService) {
  }

  ngOnInit(): void {
  }
  deliveryCarInTrip(trip: any): void {
      this.tripService.deliveryCarInTrip(trip).subscribe(
        (response) =>
        {
          console.log(response);
          this.successMessage = 'Carro entregado exitosamente. Viaje actualizado!';
          this.refreshTrip.emit();
          Swal.fire(this.successMessage);
        },
        (error) => {
          console.log(error.error);
          const response = error.error;
          Swal.fire(response.message);
        }
      );
    }
    isValidDateDeliveryTrip(date: Date): boolean {
      return date !== null;
    }
}

