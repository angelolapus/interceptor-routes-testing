/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FindAgentComponent } from './findAgent.component';

describe('FindAgentComponent', () => {
  let component: FindAgentComponent;
  let fixture: ComponentFixture<FindAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
