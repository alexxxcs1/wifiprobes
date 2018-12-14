import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceNavComponent } from './device-nav.component';

describe('DeviceNavComponent', () => {
  let component: DeviceNavComponent;
  let fixture: ComponentFixture<DeviceNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
