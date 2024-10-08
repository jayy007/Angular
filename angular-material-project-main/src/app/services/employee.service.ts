import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  http = inject(HttpClient);
  constructor() { }
  addEmployee(data:any) : Observable<any> {
    return this.http.post('http://localhost:3000/employees', data)
  }
  getEmployeeList() : Observable<any> {
    return this.http.get('http://localhost:3000/employees')
  }
  deleteEmployee(id:any) : Observable<any> {
    return this.http.delete(`http://localhost:3000/employees/${id}`)
  }
  updateEmployee(id:number, data:any) : Observable<any> {
    return this.http.put(`http://localhost:3000/employees/${id}`, data);
  }
}
