import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from '../../employee.modal';
import { EmployeeService } from '../../Services/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employee: Employee;
  employees: Employee[];
  filterBy = '';
  editMode = false;
  id = 20;
  recordId = '';

  successAlert = false;
  deleteAlert = false;
  updateAlert = false;

  addEmployeeForm: FormGroup;

  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
    this.empService.getEmployees().subscribe(res => {
      this.employees = res;
    });

    this.addEmployeeForm = new FormGroup({
      'id': new FormControl(this.id),
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phoneNumber': new FormControl(null, Validators.required),
      'dateOfJoin': new FormControl(null, Validators.required),
      'city': new FormControl(null, Validators.required),
      'state': new FormControl(null, Validators.required)
    });
  }

  onAddNewEmployeeSelect(): void {
    this.editMode = false;
  }

  onAddOrUpdate(): void {
    this.onCreateSubmit();
  }

  onCreateSubmit(): void {
    if (this.editMode) {
      this.employee = this.addEmployeeForm.value;
      this.empService.updateEmployee(this.recordId, this.employee);
      this.updateAlert = true;
    } else {
      this.employee = this.addEmployeeForm.value;
      this.empService.createEmployee(this.employee);
      this.successAlert = true;
    }

  }

  onEditSelect(id: string): void {
    this.editMode = true;
    this.recordId = id;
    this.empService.getEmployee(id).subscribe((res: Employee) => {
      this.employee = res;
      this.addEmployeeForm = new FormGroup({
        'firstName': new FormControl(this.employee.firstName, Validators.required),
        'lastName': new FormControl(this.employee.lastName, Validators.required),
        'email': new FormControl(this.employee.email, [Validators.required, Validators.email]),
        'phoneNumber': new FormControl(this.employee.phoneNumber, Validators.required),
        'dateOfJoin': new FormControl(this.employee.dateOfJoin, Validators.required),
        'city': new FormControl(this.employee.city, Validators.required),
        'state': new FormControl(this.employee.state, Validators.required)
      });
    });
  }

  onDeleteSelect(id: string): void {
    this.recordId = id;
  }

  deleteRecord(): void {
    this.empService.deleteEmployee(this.recordId);
    this.deleteAlert = true;
  }
}
