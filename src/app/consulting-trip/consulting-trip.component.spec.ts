import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultingTripComponent } from './consulting-trip.component';

describe('ConsultingTripComponent', () => {
  let component: ConsultingTripComponent;
  let fixture: ComponentFixture<ConsultingTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultingTripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultingTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
