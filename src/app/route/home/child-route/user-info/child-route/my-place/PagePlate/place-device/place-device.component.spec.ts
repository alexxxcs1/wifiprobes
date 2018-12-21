import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceDeviceComponent } from './place-device.component';

describe('PlaceDeviceComponent', () => {
  let component: PlaceDeviceComponent;
  let fixture: ComponentFixture<PlaceDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
