import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatisfactionGraphComponent } from './satisfaction-graph.component';

describe('SatisfactionGraphComponent', () => {
  let component: SatisfactionGraphComponent;
  let fixture: ComponentFixture<SatisfactionGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SatisfactionGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SatisfactionGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
