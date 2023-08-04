import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ConsultingCarComponent } from './consulting-car/consulting-car.component';
import { ConsultingEmployeeComponent } from './consulting-employee/consulting-employee.component';
import { ConsultingTripComponent } from './consulting-trip/consulting-trip.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { ListCarComponent } from './list-car/list-car.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { ListTripComponent } from './list-trip/list-trip.component';
import { UpdateCarComponent } from './update-car/update-car.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { IndexPageComponent } from './index/index-page.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarModalComponent } from './car-modal/car-modal.component';
import { ReportTripComponent } from './trip-report/report-trip.component';
import { ListTripReportComponent } from './list-trip-report/list-trip-report.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    ListCarComponent,
    ListEmployeeComponent,
    ListTripComponent,
    UpdateCarComponent,
    UpdateEmployeeComponent,
    ConsultingCarComponent,
    ConsultingEmployeeComponent,
    ConsultingTripComponent,
    CreateCarComponent,
    CreateEmployeeComponent,
    CreateTripComponent,
    IndexPageComponent,
    CarModalComponent,
    CreateTripComponent,
    ReportTripComponent,
    ListTripReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
