import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationGraphComponent } from './communication-graph.component';

describe('CommunicationGraphComponent', () => {
  let component: CommunicationGraphComponent;
  let fixture: ComponentFixture<CommunicationGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunicationGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommunicationGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
