import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceDailyComponent } from './device-daily.component';

describe('DeviceDailyComponent', () => {
  let component: DeviceDailyComponent;
  let fixture: ComponentFixture<DeviceDailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceDailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
