import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }

  getEmployee()
  {
    return[
      {"id":1,"name":"Andrew","age":30},
      {"id":2,"name":"Garfield","age":31},
      {"id":3,"name":"John","age":27}
    ];
  }
}
