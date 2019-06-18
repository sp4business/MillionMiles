import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObdContactComponent } from './obd-contact.component';

describe('ObdContactComponent', () => {
  let component: ObdContactComponent;
  let fixture: ComponentFixture<ObdContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObdContactComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObdContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
