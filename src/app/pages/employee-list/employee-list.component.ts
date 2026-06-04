import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  employees = [
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
  ];

}