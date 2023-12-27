import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSecurityGraphComponent } from './job-security-graph.component';

describe('JobSecurityGraphComponent', () => {
  let component: JobSecurityGraphComponent;
  let fixture: ComponentFixture<JobSecurityGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobSecurityGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobSecurityGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
