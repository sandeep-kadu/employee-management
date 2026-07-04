import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  employee = {
    id: 0,
    name: '',
    department: ''
  };

  save() {

    //console.log(this.employee);
    this.employeeService.addEmployee(this.employee);
      //alert('Employee Saved');
      this.router.navigate(['/employees']);


  }

}