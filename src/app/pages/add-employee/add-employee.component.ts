import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  employee = {
    id: 0,
    name: '',
    department: ''
  };

  save() {

    console.log(this.employee);

    alert('Employee Saved');

  }

}