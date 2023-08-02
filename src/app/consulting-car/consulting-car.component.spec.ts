import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultingCarComponent } from './consulting-car.component';

describe('ConsultingCarComponent', () => {
  let component: ConsultingCarComponent;
  let fixture: ComponentFixture<ConsultingCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultingCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultingCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
