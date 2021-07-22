import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-stamps',
  templateUrl: './time-stamps.component.html',
  styleUrls: ['./time-stamps.component.scss']
})
export class TimeStampsComponent implements OnInit {
  @Input() set timeStamp(value: any) {
    if (!value.reset) {
      this.timeStampList.push(value.time);
    } else {
      this.timeStampList = [value.time];
    }
  }

  public timeStampList = new Array<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
