import { Component, Input, OnInit, OnDestroy} from '@angular/core';
import { CounterService } from '../counter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-updated-timer',
  templateUrl: './updated-timer.component.html',
  styleUrls: ['./updated-timer.component.scss']
})
export class UpdatedTimerComponent implements OnInit, OnDestroy {
  public timerLimit = 0;    
  private timerId: any;
  private counterSubscription: Subscription = new Subscription();

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.counterSubscription = this.counterService.getCounterDetails().subscribe((data: any) => {
      this.triggerClick(data);
    })
  }

  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
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
