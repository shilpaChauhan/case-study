import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { StartTimerEmitter } from './updated-input-timer/startTimer.model';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private getDetails = new BehaviorSubject<StartTimerEmitter>({
    timerLimit: 0,
    start: false,
    resume: false,
    pauseCount: 0,
    startCount: 0,
    timeStamp: '',
    reset: false
  });
  constructor() { }

  public getCounterDetails(): Observable<any> {
    return this.getDetails.asObservable();
  }

  public sendCounterDetails(details: StartTimerEmitter) {
    this.getDetails.next(details);
  }
}
