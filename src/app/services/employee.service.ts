import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://localhost:8080/employees';
  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]>{

    return this.http.get<Employee[]>(this.apiUrl);

  }

  addEmployee(employee: Employee): Observable<Employee> {

  return this.http.post<Employee>(this.apiUrl, employee);

}

updateEmployee(id: number, employee: Employee): Observable<Employee> {

  return this.http.put<Employee>(`${this.apiUrl}/${id}`, employee);

}

getEmployeeById(id: number): Observable<Employee> {

  return this.http.get<Employee>(`${this.apiUrl}/${id}`);

}

deleteEmployee(id: number): Observable<void> {

  return this.http.delete<void>(`${this.apiUrl}/${id}`);

}
 /*  employees = [

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
  } */

}