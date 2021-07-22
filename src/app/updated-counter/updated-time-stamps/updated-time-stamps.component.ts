import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CounterService } from '../counter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-updated-time-stamps',
  templateUrl: './updated-time-stamps.component.html',
  styleUrls: ['./updated-time-stamps.component.scss']
})
export class UpdatedTimeStampsComponent implements OnInit, OnDestroy {
  private counterSubscription: Subscription = new Subscription();
  public timeStampList = new Array<string>();
  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.counterSubscription = this.counterService.getCounterDetails().subscribe((data: any) => {
      if (!data.reset) {
        this.timeStampList.push(data.timeStamp);
      } else {
        this.timeStampList = [data.timeStamp];
      }
    })
  }

  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }

}
