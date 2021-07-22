import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import { TimerComponent } from './timer/timer.component';
import { InputTimerComponent } from './input-timer/input-timer.component';
import { TimeStampsComponent } from './time-stamps/time-stamps.component';
import { ClickCountComponent } from './click-count/click-count.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CounterComponent,
    TimerComponent,
    InputTimerComponent,
    TimeStampsComponent,
    ClickCountComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ]
})
export class CounterModule { }
