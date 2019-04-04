/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PantsComponent } from './Pants.component';

describe('PantsComponent', () => {
  let component: PantsComponent;
  let fixture: ComponentFixture<PantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
