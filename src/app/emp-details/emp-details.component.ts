import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from '../employee-service.service';

@Component({
  selector: 'app-emp-details',
  templateUrl:'./emp-details.component.html',
  styles: []
})
export class EmpDetailsComponent implements OnInit {

  public employees = [];
  constructor(private _employeeService: EmployeeServiceService) { }     

  ngOnInit() {
    this.employees=this._employeeService.getEmployee();  
  }
}
