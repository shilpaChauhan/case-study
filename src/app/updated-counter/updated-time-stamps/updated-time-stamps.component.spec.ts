import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatedTimeStampsComponent } from './updated-time-stamps.component';

describe('UpdatedTimeStampsComponent', () => {
  let component: UpdatedTimeStampsComponent;
  let fixture: ComponentFixture<UpdatedTimeStampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedTimeStampsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedTimeStampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
