import { Component, OnInit } from '@angular/core';
import { StartTimerEmitter } from '../counter/input-timer/startTimer.model';

@Component({
  selector: 'app-updated-counter',
  templateUrl: './updated-counter.component.html',
  styleUrls: ['./updated-counter.component.scss']
})
export class UpdatedCounterComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
