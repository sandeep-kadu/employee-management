import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { Employee } from '../../models/employee';


@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  employeeId!: number;

  employee = {
    name: '',
    department: '',
    salary: 0
  };

  ngOnInit(): void {

  this.employeeId = Number(this.route.snapshot.paramMap.get('id'));

  if (this.employeeId) {

    this.employeeService.getEmployeeById(this.employeeId).subscribe({

      next: (data) => {

        this.employee = data;

      },

      error: (err) => {

        console.error(err);

      }

    });

  }

}

  //save() {

    //console.log(this.employee);
    //this.employeeService.addEmployee(this.employee);
      //alert('Employee Saved');
      //this.router.navigate(['/employees']);
  //}

  save() {

  if (this.employeeId) {

    // UPDATE

    this.employeeService.updateEmployee(this.employeeId, this.employee).subscribe({

      next: (response) => {

        alert('Employee Updated Successfully');

        this.router.navigate(['/employees']);

      },

      error: (err) => {

        console.error(err);

        alert('Update Failed');

      }

    });

  } else {

    // ADD

    this.employeeService.addEmployee(this.employee).subscribe({

      next: (response) => {

        alert('Employee Saved Successfully');

        this.router.navigate(['/employees']);

      },

      error: (err) => {

        console.error(err);

        alert('Save Failed');

      }

    });

  }

}

}