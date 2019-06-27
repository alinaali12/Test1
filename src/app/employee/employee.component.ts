import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee',
  templateUrl:'./employee.component.html',
  styles: []
})
export class EmployeeComponent implements OnInit {

  public empName="new";
  public employees = [];
  constructor(private _employeeService: EmployeeServiceService) { }     

  ngOnInit() {
    this.employees=this._employeeService.getEmployee();  
  }
  
}
