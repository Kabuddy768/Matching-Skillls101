import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobInterviewComponent } from './interview.component';

describe('InterviewComponent', () => {
  let component: JobInterviewComponent;
  let fixture: ComponentFixture<JobInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobInterviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
