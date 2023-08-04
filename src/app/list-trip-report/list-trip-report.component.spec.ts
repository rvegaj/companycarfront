import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTripReportComponent } from './list-trip-report.component';

describe('ListEmployeeComponent', () => {
  let component: ListTripReportComponent;
  let fixture: ComponentFixture<ListTripReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTripReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTripReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
