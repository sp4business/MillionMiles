import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineHealthComponent } from './engine-health.component';

describe('EngineHealthComponent', () => {
  let component: EngineHealthComponent;
  let fixture: ComponentFixture<EngineHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineHealthComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
