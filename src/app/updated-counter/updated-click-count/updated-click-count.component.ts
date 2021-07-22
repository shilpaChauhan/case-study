import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from '../counter.service';
@Component({
  selector: 'app-updated-click-count',
  templateUrl: './updated-click-count.component.html',
  styleUrls: ['./updated-click-count.component.scss']
})
export class UpdatedClickCountComponent implements OnInit, OnDestroy {
  pauseCount = 0;
  startCount = 0;
  private counterSubscription: Subscription = new Subscription();
  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.counterSubscription =  this.counterService.getCounterDetails().subscribe((data: any) => {
      this.pauseCount = data.pauseCount;
      this.startCount = data.startCount;
    })
  }

  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }
}
