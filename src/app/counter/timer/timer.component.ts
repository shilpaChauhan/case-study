import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Input() set timerDetails(value: any) {
    if (value) {
      this.triggerClick(value);
    }
  }

  public timerLimit = 0;    
  private timerId: any;
  constructor() { }

  ngOnInit(): void {
  }

  private triggerClick(value: any) {
    this.pauseTimer();
    if (value.start) {
      if(!value.resume) {
        this.timerLimit = value.timerLimit;
      }
      this.startTimer();
    }
  }

  private startTimer() {      
    this.timerId = setInterval(() => {
      if(this.timerLimit > 0) {
        this.timerLimit--;
      } else {
        clearInterval(this.timerId);
      }
    }, 1500);
  }

  private pauseTimer() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

}
