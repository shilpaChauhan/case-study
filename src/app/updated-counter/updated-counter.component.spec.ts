import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedCounterComponent } from './updated-counter.component';

describe('UpdatedCounterComponent', () => {
  let component: UpdatedCounterComponent;
  let fixture: ComponentFixture<UpdatedCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
