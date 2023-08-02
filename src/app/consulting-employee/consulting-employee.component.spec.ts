import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultingEmployeeComponent } from './consulting-employee.component';

describe('ConsultingEmployeeComponent', () => {
  let component: ConsultingEmployeeComponent;
  let fixture: ComponentFixture<ConsultingEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultingEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultingEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
