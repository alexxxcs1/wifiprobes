import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsBoxComponent } from './echarts-box.component';

describe('EchartsBoxComponent', () => {
  let component: EchartsBoxComponent;
  let fixture: ComponentFixture<EchartsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
