import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedInputTimerComponent } from './updated-input-timer.component';

describe('UpdatedInputTimerComponent', () => {
  let component: UpdatedInputTimerComponent;
  let fixture: ComponentFixture<UpdatedInputTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedInputTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedInputTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
