import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPickComponent } from './data-pick.component';

describe('DataPickComponent', () => {
  let component: DataPickComponent;
  let fixture: ComponentFixture<DataPickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataPickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
