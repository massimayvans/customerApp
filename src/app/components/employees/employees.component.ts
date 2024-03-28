import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Employee } from '../../employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent implements OnInit {

  employees: any;
  employee = new Employee

  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.getEmployeesData();
  }
  getEmployeesData() {
    this.dataService.getData().subscribe(res => {
      this.employees = res;
    });
  }

  insertData() {
    //console.log(this.employee);
    this.dataService.insertData(this.employee).subscribe(res => {
      //console.log(res);
      this.getEmployeesData();
    })
  }
  deleteData(id: number) {
    // console.log(id);
    this.dataService.deleteData(id).subscribe(res => {
      this.getEmployeesData();
    })

  }
}
