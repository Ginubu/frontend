import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Est3Component } from './est3.component';

describe('Est3Component', () => {
  let component: Est3Component;
  let fixture: ComponentFixture<Est3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Est3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Est3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
