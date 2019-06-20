import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoLocationPage } from './auto-location.page';

describe('AutoLocationPage', () => {
  let component: AutoLocationPage;
  let fixture: ComponentFixture<AutoLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoLocationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
