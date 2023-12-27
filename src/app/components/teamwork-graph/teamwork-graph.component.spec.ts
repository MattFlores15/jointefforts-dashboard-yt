import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamworkGraphComponent } from './teamwork-graph.component';

describe('TeamworkGraphComponent', () => {
  let component: TeamworkGraphComponent;
  let fixture: ComponentFixture<TeamworkGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamworkGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamworkGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
