import { Component } from '@angular/core';
import {EmployeeService} from '../../services/employee.service';  

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  constructor(public employeeService: EmployeeService) { }
 /*  employees = [
    {
      id: 1,
      name: 'Rahul',
      department: 'IT'
    },
    {
      id: 2,
      name: 'Amit',
      department: 'HR'
    },
    {
      id: 3,
      name: 'Neha',
      department: 'Finance'
    }
  ]; */

  get employees() {
    return this.employeeService.employees;
  }

}