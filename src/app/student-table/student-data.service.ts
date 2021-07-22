import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";  

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor(private httpClient: HttpClient) { }

  getStudentData(): Observable<any> {
    return this.httpClient.get("assets/data/student-data.json");
  }
}
