import { Component, OnInit } from '@angular/core';
import { StartTimerEmitter } from '../counter/input-timer/startTimer.model';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  timerDetails: any;
  pauseCount = 0;
  startCount = 0;
  timeStamp = {reset: false, time: ''};
  constructor() { }

  ngOnInit(): void {
  }

  actionTriggered(event: StartTimerEmitter) {
    this.timerDetails = event;
    this.pauseCount = event.pauseCount;
    this.startCount = event.startCount;
    this.timeStamp = {reset: event.reset, time: event.timeStamp};
  }

}
