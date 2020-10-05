import { Injectable, EventEmitter } from '@angular/core';
import { Employee } from '../employee.modal';
import { HttpClient } from '@angular/common/http';
import { map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[];

  constructor(private http: HttpClient) { }


  createEmployee(employee: Employee): void {
    console.log('Create method called');
    this.http.post('https://employee-records-871c6.firebaseio.com/employees.json',
      employee
    ).subscribe();
  }

  getEmployee(id: string) {
   return this.http.get<Employee>('https://employee-records-871c6.firebaseio.com/employees/' + id + '.json');
  }

  getEmployees() {
  return  this.http.get<{ [key: string]: Employee }>('https://employee-records-871c6.firebaseio.com/employees.json')
    .pipe(map(responseData => {
      const emplArray: Employee[] = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          emplArray.push({ ...responseData[key], id: key });
        }
      }
      return emplArray;
    }));
  }

  updateEmployee(id: string, employee: Employee) {
    console.log('Update method called');
    console.log('id: ' + id);
    this.http.put('https://employee-records-871c6.firebaseio.com/employees/' + id + '.json', employee).subscribe();
  }

  deleteEmployee(id: string): void {
   this.http.delete('https://employee-records-871c6.firebaseio.com/employees/' + id + '.json').subscribe();
  }
}


