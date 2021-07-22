import { Component, OnInit } from '@angular/core';
import { StudentDataService } from './student-data.service';
import { data } from './data.model';

@Component({
  selector: 'app-student-tabl',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {
  headerList = new Array<string>();
  dataList = new Array<data>();
  order = 'default';
  property = 'header';
  icon = 'header-default';
  constructor(private studentDataService: StudentDataService) { }

  ngOnInit() {
    this.studentDataService.getStudentData().subscribe((data) => {
      if (data.length > 0) {
        this.dataList = data;
        this.headerList = Object.keys(this.dataList[0]);
      }
    })
  }

  resetData() {
    this.studentDataService.getStudentData().subscribe((data) => {
      if (data.length > 0) {
        this.dataList = data;
      }
    })
  }
}
