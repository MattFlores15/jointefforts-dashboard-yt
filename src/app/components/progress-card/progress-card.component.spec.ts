import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressCardComponent } from './progress-card.component';

describe('ProgressCardComponent', () => {
  let component: ProgressCardComponent;
  let fixture: ComponentFixture<ProgressCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgressCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
