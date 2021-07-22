import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedTimerComponent } from './updated-timer.component';

describe('UpdatedTimerComponent', () => {
  let component: UpdatedTimerComponent;
  let fixture: ComponentFixture<UpdatedTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
