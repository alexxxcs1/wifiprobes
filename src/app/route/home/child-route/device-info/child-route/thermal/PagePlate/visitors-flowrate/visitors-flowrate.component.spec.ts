import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorsFlowrateComponent } from './visitors-flowrate.component';

describe('VisitorsFlowrateComponent', () => {
  let component: VisitorsFlowrateComponent;
  let fixture: ComponentFixture<VisitorsFlowrateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorsFlowrateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorsFlowrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
