import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeesService } from "../services/employees.service"

import { from } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeesService]

})
export class EmployeesComponent implements OnInit {

  registerForm;
  submitted: boolean;
  employee :object;

  constructor(
    private formBuilder: FormBuilder,
    private employeesService: EmployeesService
  ) {

  }

  ngOnInit() {
    this.employeesService.GetList().subscribe((response:any) => {
    this.employee = response.body;
    });
  }
}