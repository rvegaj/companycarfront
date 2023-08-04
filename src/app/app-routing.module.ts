import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { IndexPageComponent } from './index/index-page.component';
import { ReportTripComponent } from './trip-report/report-trip.component';
import { AuthGuard } from './auth.guard';
import { AuthHomeGuard } from './guardhome/auth-home-guard.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: [{path: 'create-employee' , component: CreateEmployeeComponent},
              {path: 'create-car' , component: CreateCarComponent},
              {path: 'create-trip' , component: CreateTripComponent},
              {path: 'report-trip', component: ReportTripComponent}]},
  { path: 'login', component: LoginComponent, canActivate: [AuthHomeGuard] },
  {path: '', redirectTo: 'index-page', pathMatch: 'full'},
  {path: 'index-page', component: IndexPageComponent, children: [
      {path: 'Login', component: LoginComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
