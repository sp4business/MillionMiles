import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OilHealthComponent } from './oil-health.component';

describe('OilHealthComponent', () => {
  let component: OilHealthComponent;
  let fixture: ComponentFixture<OilHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OilHealthComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OilHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
