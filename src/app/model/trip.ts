import {AbstractControl} from '@angular/forms';
import {Employee} from './employee';
import {Car} from './car';

export class Trip {
  id: AbstractControl;
  employeeId: Employee;
  carId: Car;
  retirementDate: AbstractControl;
  deliveryDate: AbstractControl;

}
