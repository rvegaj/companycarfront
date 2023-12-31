import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTripComponent } from './list-trip.component';

describe('ListEmployeeComponent', () => {
  let component: ListTripComponent;
  let fixture: ComponentFixture<ListTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
