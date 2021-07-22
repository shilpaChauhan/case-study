import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdatedCounterRoutingModule } from './updated-counter-routing.module';
import { UpdatedCounterComponent } from './updated-counter.component';
import { UpdatedTimerComponent } from './updated-timer/updated-timer.component';
import { UpdatedInputTimerComponent } from './updated-input-timer/updated-input-timer.component';
import { UpdatedTimeStampsComponent } from './updated-time-stamps/updated-time-stamps.component';
import { UpdatedClickCountComponent } from './updated-click-count/updated-click-count.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    UpdatedCounterComponent,
    UpdatedTimerComponent,
    UpdatedInputTimerComponent,
    UpdatedTimeStampsComponent,
    UpdatedClickCountComponent
  ],
  imports: [
    CommonModule,
    UpdatedCounterRoutingModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ]
})
export class UpdatedCounterModule { }
