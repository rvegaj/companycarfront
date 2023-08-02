import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ConsultingEmployeeComponent } from './consulting-employee/consulting-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { ConsultingCarComponent } from './consulting-car/consulting-car.component';
import { ListCarComponent } from './list-car/list-car.component';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { ConsultingTripComponent } from './consulting-trip/consulting-trip.component';
import { ListTripComponent } from './list-trip/list-trip.component';
import { IndexPageComponent } from './index/index-page.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: [{path: 'create-employee' , component: CreateEmployeeComponent},
            {path: 'create-car' , component: CreateCarComponent}]},
  { path: 'login', component: LoginComponent },
  { path: 'consulting-employee', component: ConsultingEmployeeComponent },
  { path: 'list-employee', component: ListEmployeeComponent },
  { path: 'consulting-car', component: ConsultingCarComponent },
  { path: 'list-car', component: ListCarComponent },
  { path: 'create-trip', component: CreateTripComponent },
  { path: 'consulting-trip', component: ConsultingTripComponent },
  { path: 'list-trip', component: ListTripComponent },
  {path: '', redirectTo: 'index-page', pathMatch: 'full'},
  {path: 'index-page', component: IndexPageComponent, children: [
      {path: 'Login', component: LoginComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
