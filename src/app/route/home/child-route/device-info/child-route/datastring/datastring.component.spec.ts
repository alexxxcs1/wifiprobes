import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatastringComponent } from './datastring.component';

describe('DatastringComponent', () => {
  let component: DatastringComponent;
  let fixture: ComponentFixture<DatastringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatastringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatastringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
