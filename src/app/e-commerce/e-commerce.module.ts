import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ECommerceRoutingModule } from './e-commerce-routing.module';
import { ECommerceComponent } from './e-commerce.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ECommerceComponent
  ],
  imports: [
    CommonModule,
    ECommerceRoutingModule,
    MatSelectModule,
    FormsModule
  ]
})
export class ECommerceModule { }
