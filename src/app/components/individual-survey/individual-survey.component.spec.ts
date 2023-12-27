import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualSurveyComponent } from './individual-survey.component';

describe('IndividualSurveyComponent', () => {
  let component: IndividualSurveyComponent;
  let fixture: ComponentFixture<IndividualSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualSurveyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividualSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
