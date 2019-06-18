import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObdLocateComponent } from './obd-locate.component';

describe('ObdLocateComponent', () => {
  let component: ObdLocateComponent;
  let fixture: ComponentFixture<ObdLocateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObdLocateComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObdLocateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
