import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../services/employee.service';  
import { Employee } from '../../models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];

  constructor(public employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {

    this.loadEmployees();
  }

  loadEmployees(): void {

    this.employeeService.getAllEmployees().subscribe({

      next : (data) => {
        console.log(data);
        this.employees = data;
      },

      error : (err) => {
        console.error(err);
      }
    });

  }

  editEmployee(id: number) {

    this.router.navigate(['/edit-employee', id]);

}

deleteEmployee(id: number) {

  if (confirm('Are you sure?')) {

    this.employeeService.deleteEmployee(id).subscribe({

      next: () => {

        alert('Employee Deleted');

        this.loadEmployees();

      },

      error: (err) => {

        console.error(err);

      }

    });

  }

}

  
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
  ]; 

  get employees() {
    return this.employeeService.employees;
  }*/

}