import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringDataListComponent } from './string-data-list.component';

describe('StringDataListComponent', () => {
  let component: StringDataListComponent;
  let fixture: ComponentFixture<StringDataListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringDataListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
