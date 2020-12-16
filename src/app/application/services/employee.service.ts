import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { GenericService } from './generic.service';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends GenericService<Employee, number> {

  constructor(http: HttpClient) { 
    super(http, "");
  }
}
