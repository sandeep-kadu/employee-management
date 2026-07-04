import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  { path:'employees',
    component:EmployeeListComponent
  },
  {
   path: 'add-employee',
   component: AddEmployeeComponent
  },
  {
    path: 'edit-employee/:id',
    component: AddEmployeeComponent
  }
];