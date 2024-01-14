import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerProgressComponent } from './flower-progress.component';

describe('FlowerProgressComponent', () => {
  let component: FlowerProgressComponent;
  let fixture: ComponentFixture<FlowerProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowerProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlowerProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
