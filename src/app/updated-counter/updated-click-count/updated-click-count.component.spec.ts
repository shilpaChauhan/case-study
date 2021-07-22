import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedClickCountComponent } from './updated-click-count.component';

describe('UpdatedClickCountComponent', () => {
  let component: UpdatedClickCountComponent;
  let fixture: ComponentFixture<UpdatedClickCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedClickCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedClickCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
