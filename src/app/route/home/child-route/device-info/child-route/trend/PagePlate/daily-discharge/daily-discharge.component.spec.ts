import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyDischargeComponent } from './daily-discharge.component';

describe('DailyDischargeComponent', () => {
  let component: DailyDischargeComponent;
  let fixture: ComponentFixture<DailyDischargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyDischargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyDischargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
