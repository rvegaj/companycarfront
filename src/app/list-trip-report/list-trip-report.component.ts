import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-trip-report',
  templateUrl: './list-trip-report.component.html',
  styleUrls: ['./list-trip-report.component.css']
})
export class ListTripReportComponent implements OnInit {
  @Input() tripsListInputReport: any[];
  constructor() {
  }

  ngOnInit(): void {
  }

}

