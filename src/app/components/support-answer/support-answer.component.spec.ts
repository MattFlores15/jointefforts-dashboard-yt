import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportAnswerComponent } from './support-answer.component';

describe('SupportAnswerComponent', () => {
  let component: SupportAnswerComponent;
  let fixture: ComponentFixture<SupportAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportAnswerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupportAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
