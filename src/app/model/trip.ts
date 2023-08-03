import {AbstractControl} from '@angular/forms';
import {Employee} from './employee';

export class Trip {
  id: AbstractControl;
  employeeId: Employee;
  carId: AbstractControl;
  retirementDate: AbstractControl;
  deliveryDate: AbstractControl;

}
