import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeServiceService } from './employee-service.service';
import { DepartmentComponent } from './department/department.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpDetailsComponent,
    EmployeeComponent,
    DepartmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
