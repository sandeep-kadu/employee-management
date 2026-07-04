import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees = [

    {
      id:1,
      name:'Rahul',
      department:'IT'
    },

    {
      id:2,
      name:'Amit',
      department:'HR'
    }

  ];

  addEmployee(employee: any) {
    this.employees.push(employee);
  }

}