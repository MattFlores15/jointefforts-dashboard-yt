import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StressLevelGraphComponent } from './stress-level-graph.component';

describe('StressLevelGraphComponent', () => {
  let component: StressLevelGraphComponent;
  let fixture: ComponentFixture<StressLevelGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StressLevelGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StressLevelGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
