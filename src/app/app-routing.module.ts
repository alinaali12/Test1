import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import {DepartmentComponent } from './department/department.component';
import {EmpDetailsComponent} from './emp-details/emp-details.component';

const routes: Routes = [{path:'employee',component:EmployeeComponent},
                        {path:'department',component:DepartmentComponent},
                        {path:'empdetails',component:EmpDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
