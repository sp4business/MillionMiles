import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObdInstallComponent } from './obd-install.component';

describe('ObdInstallComponent', () => {
  let component: ObdInstallComponent;
  let fixture: ComponentFixture<ObdInstallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObdInstallComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObdInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
