import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkloadGraphComponent } from './workload-graph.component';

describe('WorkloadGraphComponent', () => {
  let component: WorkloadGraphComponent;
  let fixture: ComponentFixture<WorkloadGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkloadGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkloadGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
