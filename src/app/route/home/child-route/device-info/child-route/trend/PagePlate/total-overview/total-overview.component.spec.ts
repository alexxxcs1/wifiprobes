import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalOverviewComponent } from './total-overview.component';

describe('TotalOverviewComponent', () => {
  let component: TotalOverviewComponent;
  let fixture: ComponentFixture<TotalOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
