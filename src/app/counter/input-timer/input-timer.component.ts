import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StartTimerEmitter } from './startTimer.model';

@Component({
  selector: 'app-input-timer',
  templateUrl: './input-timer.component.html',
  styleUrls: ['./input-timer.component.scss']
})
export class InputTimerComponent implements OnInit {
  @Output() onClickAction = new EventEmitter<StartTimerEmitter>();
  public limit = 0;
  private startTimer = false;
  private startCount = 0;
  private pauseCount = 0;

  constructor() { }

  ngOnInit(): void {
  }

  startPause(reset: boolean = false) {
    if (this.limit > 0) {
      this.startTimer = !this.startTimer;
      let timeStamp = '';
      if (this.startTimer) {
        this.startCount++;
        timeStamp = `Started at ${new Date(Date.now()).toLocaleString()}`;  
      } else {
        this.pauseCount++;
        timeStamp = `Paused at ${new Date(Date.now()).toLocaleString()}`;
      }
      this.onClickAction.emit({
        start: this.startTimer,
        timerLimit: this.limit,
        resume: this.startCount > 1,
        pauseCount: this.pauseCount,
        startCount: this.startCount,
        timeStamp: timeStamp,
        reset: reset
      });
    }
  }

  reset() {
    this.startTimer = false;
    this.startCount = 0;
    this.pauseCount = 0;
    this.startPause(true);
  }

}
