import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

export interface EmployeeData {
  // Définissez ici la structure des données d'un employé
  name: string;
  email: string;
  salary: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private Httpclient: HttpClient) { }

  getData() {
    return this.Httpclient.get('http://127.0.0.1:8000/api/employees');
  }

  insertData(data: EmployeeData) {
    return this.Httpclient.post('http://127.0.0.1:8000/api/addEmployee', data);
  }

  deleteData(id: number) {
    return this.Httpclient.delete('http://127.0.0.1:8000/api/deleteemployee/' + id);
  }

  getEmployeeById(id: number) {
    return this.Httpclient.get('http://127.0.0.1:8000/api/employee/' + id);
  }

  updatetData(id: number, data: EmployeeData) {
    return this.Httpclient.put('http://127.0.0.1:8000/api/updateEmployee/' + id, data);
  }
}
