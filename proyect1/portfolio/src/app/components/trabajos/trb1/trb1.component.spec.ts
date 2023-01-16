import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trb1Component } from './trb1.component';

describe('Trb1Component', () => {
  let component: Trb1Component;
  let fixture: ComponentFixture<Trb1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Trb1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trb1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
