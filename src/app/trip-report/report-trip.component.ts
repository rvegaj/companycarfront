import {Component, OnInit} from '@angular/core';
import {TripService} from '../services/tripservice/trip.service';
import Swal from 'sweetalert2';


interface Mes {
  name: string;
  value: string;
}
@Component({
  selector: 'app-report-trip',
  templateUrl: './report-trip.component.html',
  styleUrls: ['./report-trip.component.css']
})

export class ReportTripComponent implements OnInit{

  months = [
    { name: 'Enero', value: '01' },
    { name: 'Febrero', value: '02' },
    { name: 'Marzo', value: '03' },
    { name: 'Abril', value: '04' },
    { name: 'Mayo', value: '05' },
    { name: 'Junio', value: '06' },
    { name: 'Julio', value: '07' },
    { name: 'Agosto', value: '08' },
    { name: 'Septiembre', value: '09' },
    { name: 'Octubre', value: '10' },
    { name: 'Noviembre', value: '11' },
    { name: 'Diciembre', value: '12' }
  ];

  years: number[] = [];
  viewTableReport = false;
  selectedYear: string;
  selectedMonthObj: Mes;
  isButtonDisabled = true;

  tripsListReport: any[];
  constructor(private tripService: TripService) {
    const currentYear = new Date().getFullYear();
    for (let i = 0; i < 21; i++) {
      this.years.push(currentYear - i);
    }
  }

  ngOnInit(): void {
  }

  onYearSelected(yearValue: number): void {
    this.selectedYear = yearValue.toString();
    this.checkIfButtonShouldBeEnabled();
    console.log('Año seleccionado:', yearValue);
  }

  createReportTrip(): void{
    this.tripService.findTripsByMonthAndYear(this.selectedMonthObj.value, this.selectedYear).subscribe(
      (response) =>
      {
        console.log(response);
        this.tripsListReport = response;
        this.viewTableReport = true;
      },
      (error) => {
        console.log(error.error);
        const response = JSON.parse(error.error);
        Swal.fire(response.message);
      }
    );
  }
  checkIfButtonShouldBeEnabled(): void {
    if (this.selectedMonthObj && this.selectedYear) {
      this.isButtonDisabled = false;
    } else {
      this.isButtonDisabled = true;
    }
  }
}
