import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentTableRoutingModule } from './student-table-routing.module';
import { StudentTableComponent } from './student-table.component';
import { HttpClientModule } from '@angular/common/http';
import { SortDirective } from './directive/sort.directive';

@NgModule({
  declarations: [
    StudentTableComponent,
    SortDirective
  ],
  imports: [
    CommonModule,
    StudentTableRoutingModule,
    HttpClientModule
  ]
})
export class StudentTableModule { }
