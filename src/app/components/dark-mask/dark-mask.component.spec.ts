import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkMaskComponent } from './dark-mask.component';

describe('DarkMaskComponent', () => {
  let component: DarkMaskComponent;
  let fixture: ComponentFixture<DarkMaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkMaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
